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
import type { UserTutorialSpecEntity } from './UserTutorialSpecEntity';
// eslint-disable-next-line no-duplicate-imports
import type { UserTutorialState } from './UserTutorialState';


/**
 * User Tutorial Spec
 * @export
 * @interface UserTutorialSpec
 */
export interface UserTutorialSpec  {
  /**
   * 
   * @type {boolean}
   * @memberof UserTutorialSpec
   */
  is_enabled: boolean;
  /**
   * 
   * @type {UserTutorialSpecEntity[]}
   * @memberof UserTutorialSpec
   */
  entities: UserTutorialSpecEntity[];
  /**
   * 
   * @type {UserTutorialState[]}
   * @memberof UserTutorialSpec
   */
  states: UserTutorialState[];
}


