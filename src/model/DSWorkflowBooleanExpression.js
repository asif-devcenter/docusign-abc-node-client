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
import DSWorkflowBooleanExpressionExpressionsInner from './DSWorkflowBooleanExpressionExpressionsInner';
import DSWorkflowExpressionTypesBooleanExpression from './DSWorkflowExpressionTypesBooleanExpression';
import DSWorkflowLogicalOperatorTypes from './DSWorkflowLogicalOperatorTypes';

/**
 * The DSWorkflowBooleanExpression model module.
 * @module model/DSWorkflowBooleanExpression
 * @version 1.0.0
 */
class DSWorkflowBooleanExpression {
    /**
     * Constructs a new <code>DSWorkflowBooleanExpression</code>.
     * @alias module:model/DSWorkflowBooleanExpression
     * @param type {module:model/DSWorkflowExpressionTypesBooleanExpression} 
     * @param logicalOperator {module:model/DSWorkflowLogicalOperatorTypes} 
     * @param expressions {Array.<module:model/DSWorkflowBooleanExpressionExpressionsInner>} 
     */
    constructor(type, logicalOperator, expressions) { 
        
        DSWorkflowBooleanExpression.initialize(this, type, logicalOperator, expressions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, logicalOperator, expressions) { 
        obj['type'] = type;
        obj['logicalOperator'] = logicalOperator;
        obj['expressions'] = expressions;
    }

    /**
     * Constructs a <code>DSWorkflowBooleanExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowBooleanExpression} obj Optional instance to populate.
     * @return {module:model/DSWorkflowBooleanExpression} The populated <code>DSWorkflowBooleanExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowBooleanExpression();

            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowExpressionTypesBooleanExpression.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('logicalOperator')) {
                obj['logicalOperator'] = DSWorkflowLogicalOperatorTypes.constructFromObject(data['logicalOperator']);
            }
            if (data.hasOwnProperty('expressions')) {
                obj['expressions'] = ApiClient.convertToType(data['expressions'], [DSWorkflowBooleanExpressionExpressionsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowBooleanExpression</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowBooleanExpression</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowBooleanExpression.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['expressions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['expressions'])) {
                throw new Error("Expected the field `expressions` to be an array in the JSON data but got " + data['expressions']);
            }
            // validate the optional field `expressions` (array)
            for (const item of data['expressions']) {
                DSWorkflowBooleanExpressionExpressionsInner.validateJSON(item);
            };
        }

        return true;
    }


}

DSWorkflowBooleanExpression.RequiredProperties = ["type", "logicalOperator", "expressions"];

/**
 * @member {module:model/DSWorkflowExpressionTypesBooleanExpression} type
 */
DSWorkflowBooleanExpression.prototype['type'] = undefined;

/**
 * @member {module:model/DSWorkflowLogicalOperatorTypes} logicalOperator
 */
DSWorkflowBooleanExpression.prototype['logicalOperator'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowBooleanExpressionExpressionsInner>} expressions
 */
DSWorkflowBooleanExpression.prototype['expressions'] = undefined;






export default DSWorkflowBooleanExpression;

