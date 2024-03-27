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


import ApiClient from "../ApiClient";
import GetVersion200Response from '../model/GetVersion200Response';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getHealth operation.
     * @callback module:api/DefaultApi~getHealthCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns server health status.
     * Returns server health status.
     * @param {module:api/DefaultApi~getHealthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getHealth(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['docusignAccessCode'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVersion operation.
     * @callback module:api/DefaultApi~getVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetVersion200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns server version.
     * @param {module:api/DefaultApi~getVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetVersion200Response}
     */
    getVersion(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['docusignAccessCode'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetVersion200Response;
      return this.apiClient.callApi(
        '/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
