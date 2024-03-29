/**
 * Workflows APIs
 * Workflows authors and executes experiences that allow non-coders the ability to define Simple Business Process without having to write code and to deploy them seamlessly without having to have development expertise
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: aow@docusign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ReplicationStatus.
* @enum {}
* @readonly
*/
export default class ReplicationStatus {
    
        /**
         * value: "Deploy Replication In Progress"
         * @const
         */
        "Deploy Replication In Progress" = "Deploy Replication In Progress";

    
        /**
         * value: "Deploy Replicated"
         * @const
         */
        "Deploy Replicated" = "Deploy Replicated";

    
        /**
         * value: "Deploy Replication Failed"
         * @const
         */
        "Deploy Replication Failed" = "Deploy Replication Failed";

    
        /**
         * value: "Not Replicated"
         * @const
         */
        "Not Replicated" = "Not Replicated";

    
        /**
         * value: "Delete Replication in Progress"
         * @const
         */
        "Delete Replication in Progress" = "Delete Replication in Progress";

    
        /**
         * value: "Delete Replicated"
         * @const
         */
        "Delete Replicated" = "Delete Replicated";

    
        /**
         * value: "Delete Replication Failed"
         * @const
         */
        "Delete Replication Failed" = "Delete Replication Failed";

    
        /**
         * value: "Unpublish replication in Progress"
         * @const
         */
        "Unpublish replication in Progress" = "Unpublish replication in Progress";

    
        /**
         * value: "Unpublish Replicated"
         * @const
         */
        "Unpublish Replicated" = "Unpublish Replicated";

    
        /**
         * value: "Unpublish Replication Failed"
         * @const
         */
        "Unpublish Replication Failed" = "Unpublish Replication Failed";

    

    /**
    * Returns a <code>ReplicationStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ReplicationStatus} The enum <code>ReplicationStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

