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
* Enum class ESignDocumentTypesFromPreviousStep.
* @enum {}
* @readonly
*/
export default class ESignDocumentTypesFromPreviousStep {
    
        /**
         * value: "FromPreviousStep"
         * @const
         */
        "FromPreviousStep" = "FromPreviousStep";

    

    /**
    * Returns a <code>ESignDocumentTypesFromPreviousStep</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ESignDocumentTypesFromPreviousStep} The enum <code>ESignDocumentTypesFromPreviousStep</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
