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
* Enum class DSWorkflowComparisonOperatorTypes.
* @enum {}
* @readonly
*/
export default class DSWorkflowComparisonOperatorTypes {
    
        /**
         * value: "Contains"
         * @const
         */
        "Contains" = "Contains";

    
        /**
         * value: "NotContains"
         * @const
         */
        "NotContains" = "NotContains";

    
        /**
         * value: "Equal"
         * @const
         */
        "Equal" = "Equal";

    
        /**
         * value: "NotEqual"
         * @const
         */
        "NotEqual" = "NotEqual";

    
        /**
         * value: "GreaterThan"
         * @const
         */
        "GreaterThan" = "GreaterThan";

    
        /**
         * value: "GreaterThanOrEqual"
         * @const
         */
        "GreaterThanOrEqual" = "GreaterThanOrEqual";

    
        /**
         * value: "LessThan"
         * @const
         */
        "LessThan" = "LessThan";

    
        /**
         * value: "LessThanOrEqual"
         * @const
         */
        "LessThanOrEqual" = "LessThanOrEqual";

    
        /**
         * value: "StartsWith"
         * @const
         */
        "StartsWith" = "StartsWith";

    
        /**
         * value: "NotStartsWith"
         * @const
         */
        "NotStartsWith" = "NotStartsWith";

    
        /**
         * value: "EndsWith"
         * @const
         */
        "EndsWith" = "EndsWith";

    
        /**
         * value: "NotEndsWith"
         * @const
         */
        "NotEndsWith" = "NotEndsWith";

    

    /**
    * Returns a <code>DSWorkflowComparisonOperatorTypes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DSWorkflowComparisonOperatorTypes} The enum <code>DSWorkflowComparisonOperatorTypes</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

