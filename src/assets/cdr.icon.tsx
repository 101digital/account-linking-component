import * as React from 'react';
import { SvgCss } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const CDRIcon: React.FC<Props> = ({ width = 25, height = 37 }) => {
  return (
    <SvgCss
      xml={`<svg viewBox="0 0 25 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.49132 30.3244C6.84265 29.8881 6.07716 29.6564 5.29451 29.6596C3.65961 29.6596 2.57468 30.7802 2.57468 32.5971C2.57468 34.4389 3.63292 35.5998 5.32129 35.5998C6.17855 35.5998 6.99544 35.2794 7.61473 34.8524L7.92264 36.3472C7.25265 36.7476 6.20811 37 5.25681 37C2.68492 37 0.929994 35.3849 0.929994 32.6482C0.929994 29.979 2.68492 28.2578 5.29832 28.2578C6.27579 28.2578 7.28047 28.5113 8.00402 28.9106L7.49132 30.3244ZM11.8919 36.7976H9.15889V28.4563H11.9984C14.8515 28.4563 16.5131 30.0845 16.5131 32.5666C16.5137 35.1423 14.8657 36.7976 11.8919 36.7976ZM11.905 29.8315H10.7933V35.4224H11.9853C13.7539 35.4224 14.8793 34.5015 14.8793 32.6482C14.8793 30.7649 13.8206 29.8315 11.905 29.8315ZM19.4536 36.797H17.8193V28.4563H20.7532C22.8696 28.4563 23.9951 29.4572 23.9951 30.9918C23.9951 32.1792 23.3251 33.0045 22.1866 33.394L24.3833 36.797H22.5213L20.6593 33.7394L19.4536 33.821V36.797ZM20.6593 32.5133C21.664 32.4589 22.3204 32.0058 22.3204 31.099C22.3204 30.2318 21.6651 29.8179 20.4987 29.8179H19.44V32.5426L20.6593 32.5133ZM4.42632 20.1178C4.49097 20.1808 4.54219 20.2563 4.57703 20.3395C4.61178 20.4227 4.62937 20.5121 4.62868 20.6022C4.62807 20.6924 4.60918 20.7815 4.57321 20.8642C4.53725 20.947 4.4849 21.0216 4.4193 21.0837C4.35378 21.1459 4.27631 21.1942 4.19155 21.2259C4.10679 21.2576 4.01658 21.2719 3.9261 21.268C3.83571 21.2642 3.74697 21.2423 3.66533 21.2035C3.58361 21.1648 3.51055 21.11 3.4505 21.0425C1.23115 18.7303 -0.00518343 15.6529 1.63356e-05 12.4538C-0.000590304 11.8139 0.0479414 11.1748 0.145264 10.5423C0.157743 10.4543 0.187728 10.3697 0.233226 10.2933C0.278811 10.2169 0.339215 10.1503 0.410799 10.0974C0.482382 10.0444 0.563844 10.0061 0.65042 9.98472C0.736997 9.96339 0.826953 9.95933 0.915089 9.97289C1.00323 9.98644 1.08781 10.0173 1.1639 10.0636C1.23999 10.11 1.30611 10.1709 1.35837 10.2429C1.41071 10.3149 1.44807 10.3964 1.46843 10.4829C1.4888 10.5695 1.49174 10.6592 1.4771 10.7468C1.39009 11.3117 1.3465 11.8823 1.34658 12.4538C1.34173 15.3086 2.44521 18.0549 4.42632 20.1178ZM22.7649 18.3494C22.6155 18.2517 22.4332 18.2172 22.2582 18.2533C22.0833 18.2894 21.9299 18.3932 21.8317 18.5419C21.4629 19.1007 21.045 19.6257 20.5829 20.1107C20.4616 20.2401 20.3966 20.4119 20.402 20.5888C20.4073 20.7657 20.4825 20.9334 20.6113 21.0553C20.7401 21.1772 20.912 21.2435 21.0896 21.2398C21.2672 21.2361 21.4361 21.1626 21.5597 21.0354C22.0775 20.4925 22.5455 19.9045 22.9581 19.2784C23.0561 19.1296 23.0908 18.9483 23.0545 18.774C23.0183 18.5998 22.9141 18.4471 22.7649 18.3494ZM23.1667 5.95546C23.0733 5.8036 22.9232 5.695 22.7493 5.65338C22.5755 5.61186 22.3922 5.64078 22.2398 5.73376C22.0874 5.82683 21.9783 5.97644 21.9365 6.14963C21.8949 6.32272 21.9239 6.50532 22.0173 6.65718C22.8759 8.05802 23.4128 9.63075 23.5897 11.2625C23.7667 12.8944 23.5791 14.545 23.0406 16.0962C23.0116 16.1795 22.9994 16.2677 23.0047 16.3557C23.0099 16.4436 23.0325 16.5297 23.071 16.6091C23.1097 16.6884 23.1637 16.7593 23.2298 16.8179C23.296 16.8764 23.3731 16.9214 23.4567 16.9502C23.5269 16.9749 23.6007 16.9875 23.6751 16.9878C23.8151 16.9877 23.9517 16.9442 24.0658 16.8633C24.1799 16.7823 24.2659 16.6681 24.3118 16.5363C24.9156 14.7975 25.1259 12.9472 24.9276 11.1179C24.7294 9.2887 24.1275 7.52578 23.1651 5.95546H23.1667ZM1.34277 8.48062C1.42423 8.51498 1.51176 8.53311 1.60025 8.5338C1.68881 8.53449 1.7766 8.51783 1.85859 8.48476C1.94066 8.4517 2.01536 8.40283 2.07845 8.34093C2.14154 8.27912 2.1918 8.20548 2.2263 8.12432C3.25152 5.71831 5.09258 3.74758 7.42797 2.55618C7.50683 2.51604 7.57703 2.46078 7.6344 2.39362C7.69186 2.32645 7.73554 2.24875 7.76275 2.16475C7.79005 2.08083 7.80045 1.99234 7.79343 1.90437C7.78641 1.81639 7.76206 1.73066 7.72176 1.6521C7.68146 1.57354 7.626 1.50361 7.55857 1.44637C7.49115 1.38913 7.41306 1.3457 7.32883 1.31851C7.24451 1.29131 7.15568 1.28095 7.06737 1.28803C6.97914 1.29503 6.89309 1.31929 6.81423 1.35943C4.19675 2.69492 2.13357 4.9041 0.985112 7.60097C0.915522 7.76492 0.914048 7.94958 0.981125 8.11457C1.0482 8.27946 1.17828 8.41112 1.34277 8.48062ZM9.99926 1.62655C10.82 1.43964 11.6594 1.34545 12.5013 1.34588C15.423 1.33975 18.2291 2.48254 20.3098 4.52587C20.3731 4.58777 20.4481 4.63664 20.5304 4.66962C20.6127 4.7026 20.7007 4.71917 20.7895 4.71822C20.8781 4.71736 20.9658 4.69906 21.0475 4.66444C21.129 4.62982 21.203 4.57948 21.2651 4.51638C21.3272 4.45327 21.3763 4.37859 21.4094 4.29657C21.4425 4.21464 21.4591 4.12693 21.4582 4.03861C21.4573 3.9502 21.4389 3.86283 21.4042 3.78159C21.3694 3.70027 21.3189 3.62654 21.2555 3.56472C18.9228 1.27396 15.7768 -0.00705013 12.5013 2.91866e-05C11.559 2.91866e-05 10.6197 0.105701 9.70114 0.315059C9.52694 0.354773 9.37572 0.461826 9.28074 0.61265C9.18575 0.763474 9.15481 0.945723 9.19468 1.11925C9.23454 1.29287 9.34209 1.44352 9.49349 1.53814C9.64489 1.63276 9.82784 1.66358 10.002 1.62378L9.99926 1.62655ZM7.22587 12.4538C7.22605 11.5706 7.4499 10.7016 7.8768 9.92756C7.92412 9.85021 7.95523 9.76414 7.96823 9.67444C7.98123 9.58482 7.97594 9.49348 7.95254 9.40594C7.92923 9.3184 7.88833 9.23647 7.83234 9.16507C7.77636 9.09367 7.70642 9.03436 7.62678 8.99059C7.54722 8.94682 7.45952 8.91962 7.36904 8.91047C7.27857 8.90141 7.18722 8.91065 7.10039 8.93758C7.01364 8.9646 6.93321 9.00889 6.86406 9.06769C6.79481 9.12639 6.73831 9.19857 6.69784 9.27972C6.06711 10.4223 5.79082 11.7255 5.90409 13.0246C6.01727 14.3236 6.51498 15.5599 7.33403 16.577C7.44591 16.7159 7.60858 16.8049 7.78624 16.8242C7.9639 16.8436 8.14199 16.7919 8.28143 16.6805C8.42078 16.569 8.51004 16.407 8.52954 16.23C8.54896 16.0529 8.49704 15.8755 8.38516 15.7367C7.63111 14.8078 7.22163 13.6483 7.22587 12.4538ZM18.2742 11.6851C18.3294 11.6852 18.3844 11.6782 18.438 11.6644C18.5241 11.6432 18.6052 11.6052 18.6765 11.5527C18.748 11.5001 18.8082 11.434 18.8539 11.3582C18.8995 11.2824 18.9297 11.1983 18.9427 11.1108C18.9556 11.0234 18.9511 10.9342 18.9294 10.8485C18.6736 9.82906 18.1769 8.88526 17.4809 8.09575C16.7848 7.30623 15.9094 6.69378 14.9276 6.3096C13.9458 5.92542 12.886 5.78047 11.8366 5.88691C10.7872 5.99336 9.77853 6.34811 8.89465 6.92153C8.82038 6.9697 8.75643 7.03186 8.70633 7.10464C8.65624 7.17733 8.62106 7.25927 8.60269 7.34551C8.5844 7.43185 8.58327 7.52085 8.59948 7.60762C8.61577 7.6943 8.64897 7.77701 8.69724 7.85091C8.74551 7.92489 8.80799 7.98861 8.88096 8.03851C8.95402 8.08841 9.03617 8.12346 9.12283 8.14176C9.20941 8.15998 9.29885 8.1611 9.38586 8.14496C9.47295 8.12881 9.55598 8.09566 9.63016 8.04757C10.3341 7.59139 11.1373 7.30942 11.9727 7.22499C12.8083 7.14064 13.6519 7.25624 14.4334 7.56238C15.215 7.86852 15.9118 8.35613 16.4659 8.98481C17.02 9.61348 17.4153 10.3649 17.6188 11.1765C17.6554 11.322 17.7398 11.4511 17.8585 11.5433C17.9773 11.6354 18.1235 11.6854 18.2742 11.6851ZM18.438 13.2545C18.3521 13.2328 18.2628 13.2282 18.1752 13.2409C18.0876 13.2535 18.0033 13.2833 17.9272 13.3285C17.8512 13.3736 17.7848 13.4333 17.7318 13.5041C17.679 13.5748 17.6406 13.6553 17.6188 13.7408C17.4336 14.4753 17.0897 15.1608 16.6108 15.7492C16.5552 15.8177 16.5137 15.8966 16.4887 15.9811C16.4637 16.0657 16.4556 16.1543 16.465 16.242C16.4744 16.3296 16.5009 16.4146 16.5433 16.492C16.5855 16.5694 16.6427 16.6378 16.7116 16.6932C16.7804 16.7486 16.8596 16.7899 16.9444 16.8149C17.0293 16.8398 17.1183 16.8479 17.2063 16.8385C17.3841 16.8197 17.547 16.7313 17.6593 16.5928C18.2606 15.8537 18.6928 14.9926 18.9255 14.0699C18.9472 13.9842 18.9516 13.895 18.9386 13.8076C18.9255 13.7202 18.8954 13.6362 18.8496 13.5604C18.8039 13.4846 18.7436 13.4186 18.6722 13.3661C18.6008 13.3136 18.5197 13.2756 18.4335 13.2545H18.438ZM18.8038 5.29294C18.7376 5.23251 18.6601 5.18589 18.5756 5.15585C18.4911 5.12571 18.4015 5.11268 18.3119 5.1176C18.2223 5.12243 18.1346 5.14505 18.0539 5.18416C17.9732 5.22327 17.9012 5.27801 17.842 5.34517C17.7829 5.41243 17.7377 5.49073 17.7094 5.57551C17.681 5.66029 17.6699 5.74982 17.6767 5.839C17.6836 5.92809 17.7082 6.01495 17.7492 6.09446C17.7902 6.17397 17.8467 6.24451 17.9154 6.302C19.5107 7.69162 20.5041 9.64258 20.6873 11.7458C20.8705 13.849 20.2294 15.9413 18.8982 17.5839C18.8407 17.6523 18.7974 17.7314 18.7709 17.8166C18.7444 17.9018 18.7352 17.9914 18.7439 18.0803C18.7525 18.169 18.7789 18.2552 18.8214 18.3337C18.8638 18.4123 18.9216 18.4815 18.9913 18.5376C19.061 18.5936 19.1411 18.6353 19.2272 18.6601C19.3132 18.6849 19.4033 18.6924 19.4923 18.6821C19.5812 18.6718 19.6672 18.6439 19.7453 18.6002C19.8233 18.5564 19.8917 18.4976 19.9467 18.4272C21.4964 16.5146 22.2426 14.0785 22.0288 11.63C21.815 9.1813 20.6579 6.91022 18.7999 5.29294H18.8038ZM5.09796 15.9928C5.05956 15.9134 5.00583 15.8422 4.9398 15.7835C4.87385 15.7248 4.79689 15.6796 4.71335 15.6504C4.6298 15.6213 4.54132 15.6089 4.45293 15.6138C4.36462 15.6187 4.27804 15.641 4.19831 15.6793C4.11858 15.7175 4.04717 15.771 3.98824 15.8367C3.92922 15.9025 3.88381 15.9792 3.8546 16.0624C3.8254 16.1456 3.81292 16.2338 3.81786 16.3217C3.8228 16.4098 3.84516 16.496 3.88355 16.5755C4.20074 17.231 4.59228 17.8483 5.05046 18.4151C5.10368 18.4898 5.17171 18.5529 5.25039 18.6004C5.329 18.6479 5.41662 18.6789 5.5077 18.6914C5.59878 18.7039 5.69151 18.6977 5.78017 18.6732C5.86874 18.6487 5.95141 18.6064 6.02299 18.5488C6.09449 18.4913 6.15351 18.4197 6.19632 18.3387C6.23905 18.2575 6.2647 18.1686 6.27172 18.0772C6.27865 17.9858 6.26678 17.894 6.23679 17.8075C6.20672 17.7209 6.15923 17.6413 6.09726 17.5737C5.70408 17.0864 5.368 16.5561 5.09579 15.9928H5.09796ZM11.1591 4.38118C11.3329 4.34967 11.4874 4.25142 11.5893 4.1075C11.691 3.96367 11.732 3.78565 11.7034 3.61195C11.6747 3.43825 11.5788 3.28276 11.436 3.1789C11.2934 3.07496 11.1155 3.0311 10.9407 3.05665C8.51143 3.45612 6.33065 4.77408 4.8527 6.73574C3.37475 8.6974 2.7136 11.1516 3.00713 13.5869C3.02819 13.7637 3.11892 13.9249 3.25932 14.035C3.39971 14.1452 3.57832 14.1954 3.75572 14.1744C3.93321 14.1533 4.09509 14.063 4.20568 13.9232C4.31626 13.7833 4.36661 13.6054 4.34546 13.4285C4.30681 13.1051 4.28723 12.7796 4.28705 12.4538C4.28974 10.5167 4.98105 8.6431 6.23826 7.16542C7.49557 5.68766 9.23749 4.7013 11.1553 4.38118H11.1591ZM14.0613 3.05501C13.885 3.02618 13.7043 3.06831 13.5591 3.17217C13.4139 3.27603 13.316 3.43307 13.2871 3.60876C13.2581 3.78453 13.3004 3.96445 13.4047 4.10914C13.5088 4.25375 13.6666 4.35131 13.8429 4.38014C14.4586 4.48089 15.0606 4.65175 15.6373 4.88925C15.8017 4.95417 15.9852 4.95193 16.1481 4.88321C16.3109 4.81448 16.4401 4.68472 16.5078 4.5219C16.5755 4.35908 16.5762 4.17631 16.5097 4.01305C16.4433 3.84971 16.3151 3.719 16.1527 3.64899C15.4796 3.3716 14.7765 3.17226 14.0575 3.05501H14.0613ZM15.6798 12.4538C15.6798 13.0802 15.4934 13.6925 15.144 14.2133C14.7947 14.7342 14.2982 15.1401 13.7172 15.3798C13.1363 15.6194 12.4971 15.6821 11.8804 15.5599C11.2637 15.4376 10.6972 15.136 10.2526 14.693C9.80799 14.25 9.50528 13.6856 9.38265 13.0713C9.26002 12.4569 9.32311 11.8201 9.56378 11.2414C9.80452 10.6628 10.212 10.1682 10.7349 9.82025C11.2578 9.47233 11.8725 9.28663 12.5013 9.28671C13.3444 9.28689 14.1528 9.62065 14.7489 10.2145C15.345 10.8084 15.6798 11.6139 15.6798 12.4538ZM18.9294 21.642C18.4107 20.3676 17.522 19.2763 16.3771 18.508C15.2322 17.7397 13.8831 17.3293 12.5027 17.3293C11.1221 17.3293 9.77316 17.7397 8.62817 18.508C7.48326 19.2763 6.59462 20.3676 6.07594 21.642C5.97819 21.8813 5.8943 22.1259 5.82471 22.3747C5.78961 22.5022 5.79724 22.6375 5.84655 22.7602C5.89586 22.8829 5.98408 22.9861 6.09778 23.0542C8.03166 24.2106 10.2449 24.8215 12.5004 24.8215C14.7561 24.8215 16.9692 24.2106 18.9032 23.0542C19.0169 22.9861 19.1051 22.8829 19.1544 22.7602C19.2037 22.6375 19.2113 22.5022 19.1762 22.3747C19.108 22.126 19.0256 21.8813 18.9294 21.642Z" fill="url(#paint0_linear_1192_1428)"/>
      <defs>
      <linearGradient id="paint0_linear_1192_1428" x1="12.5" y1="0" x2="12.5" y2="37" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1FC296"/>
      <stop offset="0.354167" stop-color="#1268C3"/>
      <stop offset="0.640625" stop-color="#002760"/>
      <stop offset="1" stop-color="#002760"/>
      </linearGradient>
      </defs>
      </svg>
      `}
      width={width}
      height={height}
    />
  );
};
export { CDRIcon };
