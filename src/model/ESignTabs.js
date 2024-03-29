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
import StringOrVariableOrTransformation from './StringOrVariableOrTransformation';

/**
 * The ESignTabs model module.
 * @module model/ESignTabs
 * @version 1.0.0
 */
class ESignTabs {
    /**
     * Constructs a new <code>ESignTabs</code>.
     * @alias module:model/ESignTabs
     * @param tabId {String} 
     */
    constructor(tabId) { 
        
        ESignTabs.initialize(this, tabId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tabId) { 
        obj['tabId'] = tabId;
    }

    /**
     * Constructs a <code>ESignTabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ESignTabs} obj Optional instance to populate.
     * @return {module:model/ESignTabs} The populated <code>ESignTabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ESignTabs();

            if (data.hasOwnProperty('tabId')) {
                obj['tabId'] = ApiClient.convertToType(data['tabId'], 'String');
            }
            if (data.hasOwnProperty('anchorString')) {
                obj['anchorString'] = ApiClient.convertToType(data['anchorString'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = StringOrVariableOrTransformation.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('stampType')) {
                obj['stampType'] = ApiClient.convertToType(data['stampType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tabLabel')) {
                obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
            }
            if (data.hasOwnProperty('scaleValue')) {
                obj['scaleValue'] = ApiClient.convertToType(data['scaleValue'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'String');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
            }
            if (data.hasOwnProperty('recipientId')) {
                obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'String');
            }
            if (data.hasOwnProperty('xPosition')) {
                obj['xPosition'] = ApiClient.convertToType(data['xPosition'], 'String');
            }
            if (data.hasOwnProperty('yPosition')) {
                obj['yPosition'] = ApiClient.convertToType(data['yPosition'], 'String');
            }
            if (data.hasOwnProperty('templateLocked')) {
                obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
            }
            if (data.hasOwnProperty('templateRequired')) {
                obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
            }
            if (data.hasOwnProperty('tabType')) {
                obj['tabType'] = ApiClient.convertToType(data['tabType'], 'String');
            }
            if (data.hasOwnProperty('tooltip')) {
                obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
            }
            if (data.hasOwnProperty('font')) {
                obj['font'] = ApiClient.convertToType(data['font'], 'String');
            }
            if (data.hasOwnProperty('bold')) {
                obj['bold'] = ApiClient.convertToType(data['bold'], 'String');
            }
            if (data.hasOwnProperty('italic')) {
                obj['italic'] = ApiClient.convertToType(data['italic'], 'String');
            }
            if (data.hasOwnProperty('underline')) {
                obj['underline'] = ApiClient.convertToType(data['underline'], 'String');
            }
            if (data.hasOwnProperty('fontColor')) {
                obj['fontColor'] = ApiClient.convertToType(data['fontColor'], 'String');
            }
            if (data.hasOwnProperty('fontSize')) {
                obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'String');
            }
            if (data.hasOwnProperty('localePolicy')) {
                obj['localePolicy'] = ApiClient.convertToType(data['localePolicy'], {'String': Object});
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ESignTabs</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ESignTabs</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ESignTabs.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tabId'] && !(typeof data['tabId'] === 'string' || data['tabId'] instanceof String)) {
            throw new Error("Expected the field `tabId` to be a primitive type in the JSON string but got " + data['tabId']);
        }
        // ensure the json data is a string
        if (data['anchorString'] && !(typeof data['anchorString'] === 'string' || data['anchorString'] instanceof String)) {
            throw new Error("Expected the field `anchorString` to be a primitive type in the JSON string but got " + data['anchorString']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          StringOrVariableOrTransformation.validateJSON(data['value']);
        }
        // ensure the json data is a string
        if (data['stampType'] && !(typeof data['stampType'] === 'string' || data['stampType'] instanceof String)) {
            throw new Error("Expected the field `stampType` to be a primitive type in the JSON string but got " + data['stampType']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['tabLabel'] && !(typeof data['tabLabel'] === 'string' || data['tabLabel'] instanceof String)) {
            throw new Error("Expected the field `tabLabel` to be a primitive type in the JSON string but got " + data['tabLabel']);
        }
        // ensure the json data is a string
        if (data['scaleValue'] && !(typeof data['scaleValue'] === 'string' || data['scaleValue'] instanceof String)) {
            throw new Error("Expected the field `scaleValue` to be a primitive type in the JSON string but got " + data['scaleValue']);
        }
        // ensure the json data is a string
        if (data['optional'] && !(typeof data['optional'] === 'string' || data['optional'] instanceof String)) {
            throw new Error("Expected the field `optional` to be a primitive type in the JSON string but got " + data['optional']);
        }
        // ensure the json data is a string
        if (data['documentId'] && !(typeof data['documentId'] === 'string' || data['documentId'] instanceof String)) {
            throw new Error("Expected the field `documentId` to be a primitive type in the JSON string but got " + data['documentId']);
        }
        // ensure the json data is a string
        if (data['recipientId'] && !(typeof data['recipientId'] === 'string' || data['recipientId'] instanceof String)) {
            throw new Error("Expected the field `recipientId` to be a primitive type in the JSON string but got " + data['recipientId']);
        }
        // ensure the json data is a string
        if (data['pageNumber'] && !(typeof data['pageNumber'] === 'string' || data['pageNumber'] instanceof String)) {
            throw new Error("Expected the field `pageNumber` to be a primitive type in the JSON string but got " + data['pageNumber']);
        }
        // ensure the json data is a string
        if (data['xPosition'] && !(typeof data['xPosition'] === 'string' || data['xPosition'] instanceof String)) {
            throw new Error("Expected the field `xPosition` to be a primitive type in the JSON string but got " + data['xPosition']);
        }
        // ensure the json data is a string
        if (data['yPosition'] && !(typeof data['yPosition'] === 'string' || data['yPosition'] instanceof String)) {
            throw new Error("Expected the field `yPosition` to be a primitive type in the JSON string but got " + data['yPosition']);
        }
        // ensure the json data is a string
        if (data['templateLocked'] && !(typeof data['templateLocked'] === 'string' || data['templateLocked'] instanceof String)) {
            throw new Error("Expected the field `templateLocked` to be a primitive type in the JSON string but got " + data['templateLocked']);
        }
        // ensure the json data is a string
        if (data['templateRequired'] && !(typeof data['templateRequired'] === 'string' || data['templateRequired'] instanceof String)) {
            throw new Error("Expected the field `templateRequired` to be a primitive type in the JSON string but got " + data['templateRequired']);
        }
        // ensure the json data is a string
        if (data['tabType'] && !(typeof data['tabType'] === 'string' || data['tabType'] instanceof String)) {
            throw new Error("Expected the field `tabType` to be a primitive type in the JSON string but got " + data['tabType']);
        }
        // ensure the json data is a string
        if (data['tooltip'] && !(typeof data['tooltip'] === 'string' || data['tooltip'] instanceof String)) {
            throw new Error("Expected the field `tooltip` to be a primitive type in the JSON string but got " + data['tooltip']);
        }
        // ensure the json data is a string
        if (data['font'] && !(typeof data['font'] === 'string' || data['font'] instanceof String)) {
            throw new Error("Expected the field `font` to be a primitive type in the JSON string but got " + data['font']);
        }
        // ensure the json data is a string
        if (data['bold'] && !(typeof data['bold'] === 'string' || data['bold'] instanceof String)) {
            throw new Error("Expected the field `bold` to be a primitive type in the JSON string but got " + data['bold']);
        }
        // ensure the json data is a string
        if (data['italic'] && !(typeof data['italic'] === 'string' || data['italic'] instanceof String)) {
            throw new Error("Expected the field `italic` to be a primitive type in the JSON string but got " + data['italic']);
        }
        // ensure the json data is a string
        if (data['underline'] && !(typeof data['underline'] === 'string' || data['underline'] instanceof String)) {
            throw new Error("Expected the field `underline` to be a primitive type in the JSON string but got " + data['underline']);
        }
        // ensure the json data is a string
        if (data['fontColor'] && !(typeof data['fontColor'] === 'string' || data['fontColor'] instanceof String)) {
            throw new Error("Expected the field `fontColor` to be a primitive type in the JSON string but got " + data['fontColor']);
        }
        // ensure the json data is a string
        if (data['fontSize'] && !(typeof data['fontSize'] === 'string' || data['fontSize'] instanceof String)) {
            throw new Error("Expected the field `fontSize` to be a primitive type in the JSON string but got " + data['fontSize']);
        }
        // ensure the json data is a string
        if (data['width'] && !(typeof data['width'] === 'string' || data['width'] instanceof String)) {
            throw new Error("Expected the field `width` to be a primitive type in the JSON string but got " + data['width']);
        }
        // ensure the json data is a string
        if (data['height'] && !(typeof data['height'] === 'string' || data['height'] instanceof String)) {
            throw new Error("Expected the field `height` to be a primitive type in the JSON string but got " + data['height']);
        }

        return true;
    }


}

ESignTabs.RequiredProperties = ["tabId"];

/**
 * @member {String} tabId
 */
ESignTabs.prototype['tabId'] = undefined;

/**
 * @member {String} anchorString
 */
ESignTabs.prototype['anchorString'] = undefined;

/**
 * @member {module:model/StringOrVariableOrTransformation} value
 */
ESignTabs.prototype['value'] = undefined;

/**
 * @member {String} stampType
 */
ESignTabs.prototype['stampType'] = undefined;

/**
 * @member {String} name
 */
ESignTabs.prototype['name'] = undefined;

/**
 * @member {String} tabLabel
 */
ESignTabs.prototype['tabLabel'] = undefined;

/**
 * @member {String} scaleValue
 */
ESignTabs.prototype['scaleValue'] = undefined;

/**
 * @member {String} optional
 */
ESignTabs.prototype['optional'] = undefined;

/**
 * @member {String} documentId
 */
ESignTabs.prototype['documentId'] = undefined;

/**
 * @member {String} recipientId
 */
ESignTabs.prototype['recipientId'] = undefined;

/**
 * @member {String} pageNumber
 */
ESignTabs.prototype['pageNumber'] = undefined;

/**
 * @member {String} xPosition
 */
ESignTabs.prototype['xPosition'] = undefined;

/**
 * @member {String} yPosition
 */
ESignTabs.prototype['yPosition'] = undefined;

/**
 * @member {String} templateLocked
 */
ESignTabs.prototype['templateLocked'] = undefined;

/**
 * @member {String} templateRequired
 */
ESignTabs.prototype['templateRequired'] = undefined;

/**
 * @member {String} tabType
 */
ESignTabs.prototype['tabType'] = undefined;

/**
 * @member {String} tooltip
 */
ESignTabs.prototype['tooltip'] = undefined;

/**
 * @member {String} font
 */
ESignTabs.prototype['font'] = undefined;

/**
 * @member {String} bold
 */
ESignTabs.prototype['bold'] = undefined;

/**
 * @member {String} italic
 */
ESignTabs.prototype['italic'] = undefined;

/**
 * @member {String} underline
 */
ESignTabs.prototype['underline'] = undefined;

/**
 * @member {String} fontColor
 */
ESignTabs.prototype['fontColor'] = undefined;

/**
 * @member {String} fontSize
 */
ESignTabs.prototype['fontSize'] = undefined;

/**
 * @member {Object.<String, Object>} localePolicy
 */
ESignTabs.prototype['localePolicy'] = undefined;

/**
 * @member {String} width
 */
ESignTabs.prototype['width'] = undefined;

/**
 * @member {String} height
 */
ESignTabs.prototype['height'] = undefined;






export default ESignTabs;

