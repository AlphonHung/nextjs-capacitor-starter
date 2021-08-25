import { useRouter } from 'next/router';
import getConfig from "next/config";

/** 獲取當前url */
const useCurrentUrl = () => {
    const { publicRuntimeConfig } = getConfig();
    const router = useRouter();
    const domain = 'starter'; // todo: 改domain
    let hostname = '';
    let currentUrl = '';
    switch (publicRuntimeConfig.apiEnv?.toUpperCase()) {
      case 'DEVELOPMENT':
      case 'DEV':
      case 'SIT':
      case 'STG':
          hostname = `https://www.${publicRuntimeConfig.apiEnv}.${domain}/`
          currentUrl = `https://www.${publicRuntimeConfig.apiEnv}.${domain}${router.asPath}`
          break;
      case 'PROD':
      default:
          hostname = `https://www.${domain}/`
          currentUrl = `https://www.${domain}${router.asPath}`
          break;
    }
  return { domain, hostname, currentUrl };
}

export default useCurrentUrl;
