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
 * The Participant model module.
 * @module model/Participant
 * @version 1.0.0
 */
class Participant {
    /**
     * Constructs a new <code>Participant</code>.
     * A DS Workflow participant
     * @alias module:model/Participant
     * @param participantRole {String} 
     * @param participantEmail {String} 
     * @param participantFirstName {String} 
     * @param participantLastName {String} 
     */
    constructor(participantRole, participantEmail, participantFirstName, participantLastName) { 
        
        Participant.initialize(this, participantRole, participantEmail, participantFirstName, participantLastName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, participantRole, participantEmail, participantFirstName, participantLastName) { 
        obj['participantRole'] = participantRole;
        obj['participantEmail'] = participantEmail;
        obj['participantFirstName'] = participantFirstName;
        obj['participantLastName'] = participantLastName;
    }

    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Participant} obj Optional instance to populate.
     * @return {module:model/Participant} The populated <code>Participant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Participant();

            if (data.hasOwnProperty('participantRole')) {
                obj['participantRole'] = ApiClient.convertToType(data['participantRole'], 'String');
            }
            if (data.hasOwnProperty('participantEmail')) {
                obj['participantEmail'] = ApiClient.convertToType(data['participantEmail'], 'String');
            }
            if (data.hasOwnProperty('participantFirstName')) {
                obj['participantFirstName'] = ApiClient.convertToType(data['participantFirstName'], 'String');
            }
            if (data.hasOwnProperty('participantLastName')) {
                obj['participantLastName'] = ApiClient.convertToType(data['participantLastName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Participant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Participant</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Participant.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['participantRole'] && !(typeof data['participantRole'] === 'string' || data['participantRole'] instanceof String)) {
            throw new Error("Expected the field `participantRole` to be a primitive type in the JSON string but got " + data['participantRole']);
        }
        // ensure the json data is a string
        if (data['participantEmail'] && !(typeof data['participantEmail'] === 'string' || data['participantEmail'] instanceof String)) {
            throw new Error("Expected the field `participantEmail` to be a primitive type in the JSON string but got " + data['participantEmail']);
        }
        // ensure the json data is a string
        if (data['participantFirstName'] && !(typeof data['participantFirstName'] === 'string' || data['participantFirstName'] instanceof String)) {
            throw new Error("Expected the field `participantFirstName` to be a primitive type in the JSON string but got " + data['participantFirstName']);
        }
        // ensure the json data is a string
        if (data['participantLastName'] && !(typeof data['participantLastName'] === 'string' || data['participantLastName'] instanceof String)) {
            throw new Error("Expected the field `participantLastName` to be a primitive type in the JSON string but got " + data['participantLastName']);
        }

        return true;
    }


}

Participant.RequiredProperties = ["participantRole", "participantEmail", "participantFirstName", "participantLastName"];

/**
 * @member {String} participantRole
 */
Participant.prototype['participantRole'] = undefined;

/**
 * @member {String} participantEmail
 */
Participant.prototype['participantEmail'] = undefined;

/**
 * @member {String} participantFirstName
 */
Participant.prototype['participantFirstName'] = undefined;

/**
 * @member {String} participantLastName
 */
Participant.prototype['participantLastName'] = undefined;






export default Participant;

