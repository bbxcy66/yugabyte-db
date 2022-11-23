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
import type { CloudEnum } from './CloudEnum';
// eslint-disable-next-line no-duplicate-imports
import type { ClusterTier } from './ClusterTier';


/**
 * Refresh provider pricing for clusters matching these filters
 * @export
 * @interface RefreshProviderPricingSpec
 */
export interface RefreshProviderPricingSpec  {
  /**
   * 
   * @type {CloudEnum}
   * @memberof RefreshProviderPricingSpec
   */
  cloud?: CloudEnum;
  /**
   * 
   * @type {string}
   * @memberof RefreshProviderPricingSpec
   */
  region?: string;
  /**
   * 
   * @type {ClusterTier}
   * @memberof RefreshProviderPricingSpec
   */
  tier?: ClusterTier;
  /**
   * 
   * @type {string[]}
   * @memberof RefreshProviderPricingSpec
   */
  cluster_ids?: string[];
}


