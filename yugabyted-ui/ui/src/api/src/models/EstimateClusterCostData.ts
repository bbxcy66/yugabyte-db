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
import type { EstimateClusterCostInfo } from './EstimateClusterCostInfo';
// eslint-disable-next-line no-duplicate-imports
import type { EstimateClusterCostSpec } from './EstimateClusterCostSpec';


/**
 * Estimate cluster cost data
 * @export
 * @interface EstimateClusterCostData
 */
export interface EstimateClusterCostData  {
  /**
   * 
   * @type {EstimateClusterCostSpec}
   * @memberof EstimateClusterCostData
   */
  spec?: EstimateClusterCostSpec;
  /**
   * 
   * @type {EstimateClusterCostInfo}
   * @memberof EstimateClusterCostData
   */
  info?: EstimateClusterCostInfo;
}


