# `@banking-component/account-linking-component`

OB Link bank account flow

## Table Of Content

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Init API Service](#init-api-service)
  - [Init Component Provider](#init-component-provider)
  - [Assets And Multiple Languages](#assets-and-multiple-languages)
- [API Reference](#api-reference)
  - [AccountLinkingService](#accountlinkingservice)
  - [AccountLinkingContext](#accountlinkingcontext)
  - [SelectBankComponent](#selectbankcomponent)
  - [LinkAccountComponent](#linkaccountcomponent)
  - [DataSharingListComponent](#datasharinglistcomponent)
  - [DataSharingDetailComponent](#datasharingdetailcomponent)

## Features

- Search and select bank
- Allow permissions
- Login OB bank
- Select account to link

## Installation

Open a Terminal in your project's folder and run the command

```sh
yarn add https://github.com/101digital/account-linking-component.git
```

- Installed [@banking-component/core](https://github.com/101digital/banking-component-core.git)
- Installed [react-native-theme-component](https://github.com/101digital/react-native-theme-component.git)
- Installed [react-native-webview](https://github.com/react-native-webview/react-native-webview)

If have any issue while installing, can see [Issue While Installing Sub-Component](https://github.com/101digital/react-native-banking-components/blob/master/README.md)

## Quick Start

### Init API Service

- `AccountLinkingService` is initiated should be from `App.ts`

```javascript
import { AccountLinkingService } from '@banking-component/account-linking-component';

AccountLinkingService.instance().initClients({
  openBankAispClient: createAuthorizedApiClient(openBankAisp), // Your Axios authorized client with Open Bank Aisp Url
  openBankAuthClient: createAuthorizedApiClient(openBankAuth), // Your Axios authorized client Open Bank Auth Url
});
```

### Init Component Provider

- Wrapped the app with `AccountLinkingProvider`

```javascript
import { AccountLinkingProvider } from '@banking-component/transaction-component';

const App = () => {
  return (
    <View>
      <AccountLinkingProvider>{/* YOUR APP COMPONENTS */}</AccountLinkingProvider>
    </View>
  );
};

export default App;
```

### Assets And Multiple Languages

- All icons, images and texts are provided by default. You can use your custom by passing them as a props into each component

- In order to do multiple languages, you need to configurate `i18n` for [react-native-theme-component](https://github.com/101digital/react-native-theme-component.git). And then, you have to copy and paste all fields and values in [texts](account-linking-component-data.json) into your app locale file. You can also change text value, but DON'T change the key.

## API Reference

### AccountLinkingService

Manage open bank services connect to BE. First of all, you need init `AccountLinkingService` soon, should be from `App.ts`

List of functions:

- `getBanks(searchText?: string)`: get all banks or search bank by keyword
- `requestConsent(bankId: string)`: get consent data by bankId
- `confirmConsent(bankId: string, accountRequestId: string, consentCode: string)`: confirm consent data after login
- `fetchBankAccounts(consentId: string)`: fetch bank accounts by consentId
- `getAccountConsents()`: get all account consent data which user's using

### AccountLinkingContext

```javascript
export interface AccountLinkingContextData {
  banks: Bank[];
  bankImages: BankImagesMap;
  isLoadingBanks: boolean;
  errorLoadBanks?: Error;
  getBanks: () => void;
  getConsent: (bankId: string) => void;
  isLoadingConsent: boolean;
  errorLoadConsent?: Error;
  consentData?: BankingConsentData;
  clearConsentData: () => void;
  confirmConsent: (
    bankId: string,
    accountRequestId: string,
    code: string
  ) => Promise<string | undefined>;
  isConfirmingConsent: boolean;
  errorConfirmConsent?: Error;
  isLoadingAccounts: boolean;
  accounts: BankAccount[];
  getAccounts: (consentId: string) => void;
  errorLoadAccounts?: Error;
  clearBankErrors: () => void;
  clearAccounts: () => void;
  accountConsents: GroupAccountConsent[];
  isLoadingAccountConsents: boolean;
  errorLoadAccountConsents?: Error;
  getAccountConsents: () => void;
}
```

### SelectBankComponent

Select bank to login

- Props, styles and component can be found [here](./src/select-bank/types.ts)

- Example

```javascript
import { SelectBankComponent } from '@banking-component/account-linking';

const SelectBankScreen = ({ navigation }: SelectBankScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <SelectBankComponent
        SearchBar={{
          components: {
            leftIcon: (
              <Box marginRight='s' marginLeft='sm'>
                <SearchSvg width={15} height={15} />
              </Box>
            ),
          },
        }}
        BankItem={{
          props: {
            onPressedBank: (bank) => navigation.navigate(Route.CONSENT, { bank }),
          },
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SelectBankScreen;
```

### LinkAccountComponent

Confirm consent consumer data, sharing permissions and link bank account

- Props, styles and component can be found [here](./src/link-account/types.tsx)

- Example

```javascript
import { BankLoginComponent, AccountLinkingContext } from '@banking-component/account-linking';
import { Bank } from '@banking-component/core';
import { AlertModal } from 'react-native-theme-component';

export type LinkAccountsScreenParams = {
  bank: Bank;
};

const LinkAccountsScreen = ({ navigation, route }: LinkAccountsScreenProps) => {
  const dynamicConsent: DynamicConsent = JSON.parse(
    remoteConfig().getString('linkAccountInstruction')
  ); // these values get from Firebase Remote Config
  const { bank } = route.params;
  const linkAccountComponentRef = useRef<LinkAccountComponentRefs>();
  const { isLinkingWallet, linkWallet, errorLinkWallet, isLinkedSuccessfully } =
    useContext(WalletContext);
  const {
    errorLoadAccounts,
    errorLoadAccountConsents,
    errorLoadConsent,
    errorConfirmConsent,
    clearBankErrors,
  } = useContext(AccountLinkingContext);

  useEffect(() => {
    if (isLinkingWallet) {
      linkAccountComponentRef.current?.updateLinkBankStatus(LinkBankStatus.isLinking);
    }
  }, [isLinkingWallet]);

  useEffect(() => {
    if (errorLinkWallet) {
      linkAccountComponentRef.current?.updateLinkBankStatus(LinkBankStatus.isFailed);
    }
  }, [errorLinkWallet]);

  useEffect(() => {
    if (isLinkedSuccessfully) {
      linkAccountComponentRef.current?.updateLinkBankStatus(LinkBankStatus.isSuccess);
    }
  }, [isLinkedSuccessfully]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <LinkAccountComponent
          ref={linkAccountComponentRef}
          props={{
            bank: bank,
            consentData: dynamicConsent,
            appIcon: <LogoIcon size={100} />,
            onLinkAccount: linkWallet,
            onGoToAccount: () => {
              navigation.navigate(Route.MY_ACCOUNTS);
            },
            onPressedLink: (link) => navigation.navigate(Route.DYNAMIC_WEBVIEW, { link }),
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
});

export default LinkAccountsScreen;
```

### DataSharingListComponent

Show all consent data which user's using

- Props, styles and component can be found [here](./src/consent-manager/types.tsx)

- Example

```javascript
const SharingDataListScreen = ({ navigation }: SharingDataListScreenProps) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <DataSharingListComponent
          onItemPressed={(item) => {
            navigation.navigate(Route.SHARING_DATA_DETAIL, { accountConsent: item });
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGreyTwo,
  },
});

export default SharingDataListScreen;
```

### DataSharingDetailComponent

Show individual consent details and can cancel sharing

- Props, styles and component can be found [here](./src/consent-manager/types.tsx)

- Example

```javascript
export type SharingDataDetailParams = {
  accountConsent: AccountConsent;
};

const SharingDataDetailsScreen = ({ navigation, route }: SharingDataDetailScreenProps) => {
  const { accountConsent } = route.params;
  const { wallets } = useContext(WalletContext);
  const [bankWallets, setBankWallets] = useState<Wallet[]>([]);
  const _dateFormat = 'DD MMM YYYY';
  const dynamicConsent: DynamicConsent = JSON.parse(
    remoteConfig().getString('linkAccountInstruction')
  );

  useEffect(() => {
    getWalletByBank();
  }, [wallets, accountConsent]);

  const getWalletByBank = () => {
    setBankWallets(wallets.filter((w) => w.bankAccount.bankCode === accountConsent.aspspInfo.id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <DataSharingDetailComponent
        accountConsent={accountConsent}
        wallets={bankWallets}
        periodFormat={_dateFormat}
        consentData={dynamicConsent}
        onPressedLink={(link) => navigation.navigate(Route.DYNAMIC_WEBVIEW, { link })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default SharingDataDetailsScreen;
```
