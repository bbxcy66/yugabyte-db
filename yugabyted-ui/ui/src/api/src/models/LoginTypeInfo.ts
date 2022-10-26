// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { LoginTypeEnum } from './LoginTypeEnum';


/**
 * Login type information
 * @export
 * @interface LoginTypeInfo
 */
export interface LoginTypeInfo  {
  /**
   * 
   * @type {LoginTypeEnum}
   * @memberof LoginTypeInfo
   */
  login_type: LoginTypeEnum;
  /**
   * 
   * @type {boolean}
   * @memberof LoginTypeInfo
   */
  is_enabled: boolean;
}


