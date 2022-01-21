import { PenIcon, TickIcon } from '../assets/images';
import { BankPermission } from '@banking-component/core';
import React, { forwardRef, useContext, useEffect, useImperativeHandle, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import AuthoriseComponent from './components/authorise-component';
import ConsentSummaryComponent from './components/consent-summary-component';
import PeriodSelectionComponent from './components/period-selection-component';
import PermissionSelectionComponent from './components/permission-selection-component';
import StepperComponent from './components/stepper-component';
import useMergeStyles from './styles';
import {
  LinkAccountComponentProps,
  LinkAccountComponentRefs,
  LinkAccountComponentStyles,
  LinkBankStatus,
  ProgressStep,
  Step,
} from './types';
import BankLoginComponent from './components/bank-login';
import ConfirmLinkingComponent from './components/confirm-linking-component';
import SelectAccountComponent from './components/select-account';
import ConsumerDataComponent from './components/consumer-data';
import { AccountLinkingContext } from '../context/account-linking-context';
import { ConsentPeriod } from '../types';

const LinkAccountComponent = forwardRef((componentsProps: LinkAccountComponentProps, ref) => {
  const {
    stepperComponent,
    periodComponent,
    permissionSelectionComponent,
    consentSummaryComponent,
    authoriseComponent,
    bankLoginComponent,
    selectAccountComponent,
    confirmLinkingComponent,
    consumerDataComponent,
    style,
    props,
  } = componentsProps;
  const {
    onLinkAccount,
    onStepChanged,
    bank,
    consentData,
    appIcon,
    onGoToAccount,
    onPressedLink,
  } = props;
  const [activeStep, setActiveStep] = useState<ProgressStep>(ProgressStep.consumerData);
  const [period, setPeriod] = useState<ConsentPeriod | undefined>(undefined);
  const [permissions, setPermissions] = useState<BankPermission[]>([]);
  const [consentId, setConsentId] = useState<string | undefined>(undefined);
  const [linkBankStatus, setLinkBankStatus] = useState<LinkBankStatus>(LinkBankStatus.isLinking);
  const styles: LinkAccountComponentStyles = useMergeStyles(style);
  const { i18n, colors } = useContext(ThemeContext);
  const { getConsent } = useContext(AccountLinkingContext);

  const _consentData =
    consentData ??
    JSON.parse(
      JSON.stringify(`{
    "companyName": "101 Digital PTE Limited",
    "guideLinkAccountLink": "https://www.101digital.io",
    "cdrPolicyLink": "https://www.101digital.io",
    "consentPeriods": [
      {
        "period": 3,
        "type": "month"
      },
      {
        "period": 6,
        "type": "month"
      },
      {
        "period": 12,
        "type": "month"
      }
    ],
    "consentSummaries": [
      {
        "id": "key_ìnformation",
        "summaryTitle": "Key information",
        "summaryMessage": "The follwing is the summary of your consent along with our data management practices.",
        "items": [
          {
            "id": "sharing_period",
            "title": "Sharing period"
          },
          {
            "id": "access_frequency",
            "title": "How often we’ll access your data?",
            "message": "We will do this multiple times daily to retrieve your data to give you up to date inforamtion. We will do this only  during the Sharing Period."
          }
        ]
      },
      {
        "id": "stop_sharing",
        "summaryTitle": "What happen to your data after you stop sharing with us?",
        "summaryMessage": "We will delete your CDR data when the consent expires or when you decide to stop sharing data with us unless it is required to be retained by Australian Law.",
        "directUrl": {
          "title": "See how we delete your data",
          "link": "https://www.101digital.io"
        }
      },
      {
        "id": "managing_data",
        "summaryTitle": "Managing your data",
        "items": [
          {
            "id": "manage_agreement",
            "title": "Where to manage this agreement",
            "message": "All of this information will be made available on your Data Sharing dashboard. You can access it by going to Settings -> Data Sharing."
          },
          {
            "id": "stop_sharing",
            "title": "If you want to stop sharing this data",
            "message": "You can stop us collecting and using your datta on your Data Sharing dashboard or by writing to cdr_au@101digital.io."
          }
        ]
      },
      {
        "id": "confirm_consent",
        "summaryTitle": "Do you consent to share this data with us?",
        "summaryMessage": "Selecting “I consent” won’t gove us access to your data just yet. We will need to connect with your bank to confirm this decision. "
      }
    ]
  }`)
    );

  const [steps, setSteps] = useState<Step[]>(
    stepperComponent?.steps ?? [
      {
        title: 'Consent',
        status: 'success',
      },
      {
        title: 'Authorise',
        status: 'success',
      },
      {
        title: 'Confirm',
        status: 'success',
      },
    ]
  );

  useEffect(() => {
    onStepChanged?.(activeStep);
  }, [activeStep]);

  useImperativeHandle(
    ref,
    (): LinkAccountComponentRefs => ({
      goBack,
      currentStep,
      updateLinkBankStatus,
    })
  );

  const updateLinkBankStatus = (status: LinkBankStatus) => {
    let _status: 'success' | 'failed' | undefined = undefined;
    if (status === LinkBankStatus.isSuccess) {
      _status = 'success';
    } else if (status === LinkBankStatus.isFailed) {
      _status = 'failed';
    }
    const _stepsLength = steps.length;
    setSteps(steps.map((s, i) => (i === _stepsLength - 1 ? { ...s, status: _status } : s)));
    setLinkBankStatus(status);
    if (activeStep !== ProgressStep.confirmResult) {
      setActiveStep(ProgressStep.confirmResult);
    }
  };

  const currentStep = () => activeStep;

  const goBack = () => {
    setActiveStep(activeStep - 1);
  };

  const _renderCatalogItem = (title: string, onPressed: () => void) => {
    return (
      <View style={styles.catalogContainerStyle}>
        <View style={styles.catalogTitleContainerStyle}>
          <Text style={styles.catalogTitleStyle}>{title}</Text>
          <TickIcon color='#009A10' size={15} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.catalogEditButtonStyle}
          onPress={onPressed}
        >
          <PenIcon color={colors.primaryColor} size={15} />
        </TouchableOpacity>
      </View>
    );
  };

  const getActiveStep = () => {
    switch (activeStep) {
      case ProgressStep.consumerData:
      case ProgressStep.accessiblePeriod:
      case ProgressStep.permissionRequest:
      case ProgressStep.summaryData:
        return 0;
      case ProgressStep.confirmLogin:
      case ProgressStep.loginBank:
      case ProgressStep.selectAccounts:
        return 1;
      case ProgressStep.confirmResult:
        return 2;
      default:
        return 0;
    }
  };

  return (
    <>
      {activeStep !== ProgressStep.consumerData &&
        activeStep !== ProgressStep.loginBank &&
        activeStep !== ProgressStep.selectAccounts && (
          <StepperComponent steps={steps} activeStep={getActiveStep()} {...stepperComponent} />
        )}
      {activeStep === ProgressStep.consumerData && (
        <ConsumerDataComponent
          onNext={() => {
            setPeriod(undefined);
            setPermissions([]);
            setConsentId(undefined);
            setActiveStep(ProgressStep.accessiblePeriod);
          }}
          onCDRPolicyPressed={() => {
            onPressedLink(_consentData.cdrPolicyLink);
          }}
          {...consumerDataComponent}
        />
      )}
      {activeStep === ProgressStep.accessiblePeriod && (
        <>
          <PeriodSelectionComponent
            periods={_consentData.consentPeriods}
            recipientId={bank.accreditedDataRecipientId ?? ''}
            companyName={_consentData.companyName}
            initialPeriod={period}
            onNext={(value) => {
              setPeriod(value);
              setActiveStep(ProgressStep.permissionRequest);
            }}
            {...periodComponent}
          />
        </>
      )}
      {activeStep === ProgressStep.permissionRequest && (
        <>
          {_renderCatalogItem(
            i18n?.t('link_bank_component.lbl_data_accessible_period') ?? 'Data accessible period',
            () => {
              setActiveStep(ProgressStep.accessiblePeriod);
            }
          )}
          <PermissionSelectionComponent
            bank={bank}
            permissions={permissions}
            onNext={() => {
              setActiveStep(ProgressStep.summaryData);
            }}
            onChanged={setPermissions}
            {...permissionSelectionComponent}
          />
        </>
      )}
      {activeStep === ProgressStep.summaryData && period && (
        <>
          {_renderCatalogItem(
            i18n?.t('link_bank_component.lbl_data_accessible_period') ?? 'Data accessible period',
            () => {
              setActiveStep(ProgressStep.accessiblePeriod);
            }
          )}
          {_renderCatalogItem(
            i18n?.t('link_bank_component.lbl_data_we_need') ?? 'Data we need',
            () => {
              setActiveStep(ProgressStep.permissionRequest);
            }
          )}
          <ConsentSummaryComponent
            summaries={_consentData.consentSummaries}
            period={period}
            onConsented={() => setActiveStep(ProgressStep.confirmLogin)}
            onPressedLink={onPressedLink}
            {...consentSummaryComponent}
          />
        </>
      )}
      {activeStep === ProgressStep.confirmLogin && (
        <AuthoriseComponent
          bank={bank}
          appIcon={appIcon}
          onContinue={() => {
            getConsent(bank.id);
            setActiveStep(ProgressStep.loginBank);
          }}
          {...authoriseComponent}
        />
      )}
      {activeStep === ProgressStep.loginBank && (
        <BankLoginComponent
          bank={bank}
          onLinked={(bankId, consentId) => onLinkAccount(bankId, consentId, [])}
          onConfirmed={(_consentId) => {
            setConsentId(_consentId);
            setActiveStep(ProgressStep.selectAccounts);
          }}
          {...bankLoginComponent}
        />
      )}
      {activeStep === ProgressStep.selectAccounts && consentId && (
        <SelectAccountComponent
          bank={bank}
          consentId={consentId}
          companyName={_consentData.companyName}
          onLinkAccount={onLinkAccount}
          {...selectAccountComponent}
        />
      )}
      {activeStep === ProgressStep.confirmResult && (
        <ConfirmLinkingComponent
          bank={bank}
          status={linkBankStatus}
          {...confirmLinkingComponent}
          onGoToAccount={onGoToAccount}
        />
      )}
    </>
  );
});

export default LinkAccountComponent;
