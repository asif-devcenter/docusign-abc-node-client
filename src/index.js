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


import ApiClient from './ApiClient';
import CancelResponse from './model/CancelResponse';
import DSDoUntilStep from './model/DSDoUntilStep';
import DSDocGenStep from './model/DSDocGenStep';
import DSDocGenStepInput from './model/DSDocGenStepInput';
import DSIdvStep from './model/DSIdvStep';
import DSIdvStepInput from './model/DSIdvStepInput';
import DSIdvStepInputRetryLimit from './model/DSIdvStepInputRetryLimit';
import DSIfElseStep from './model/DSIfElseStep';
import DSLoopStep from './model/DSLoopStep';
import DSParallelStep from './model/DSParallelStep';
import DSServiceStep from './model/DSServiceStep';
import DSSignStep from './model/DSSignStep';
import DSSignStepInput from './model/DSSignStepInput';
import DSTransformationStep from './model/DSTransformationStep';
import DSWebFormsStep from './model/DSWebFormsStep';
import DSWebFormsStepConfig from './model/DSWebFormsStepConfig';
import DSWorkflowBooleanExpression from './model/DSWorkflowBooleanExpression';
import DSWorkflowBooleanExpressionExpressionsInner from './model/DSWorkflowBooleanExpressionExpressionsInner';
import DSWorkflowComparisonExpression from './model/DSWorkflowComparisonExpression';
import DSWorkflowComparisonExpressionLeftOperand from './model/DSWorkflowComparisonExpressionLeftOperand';
import DSWorkflowComparisonOperatorTypes from './model/DSWorkflowComparisonOperatorTypes';
import DSWorkflowConcatExpression from './model/DSWorkflowConcatExpression';
import DSWorkflowDocGenDocOutputFormat from './model/DSWorkflowDocGenDocOutputFormat';
import DSWorkflowExpressionTypesBooleanExpression from './model/DSWorkflowExpressionTypesBooleanExpression';
import DSWorkflowExpressionTypesComparisonExpression from './model/DSWorkflowExpressionTypesComparisonExpression';
import DSWorkflowExpressionTypesParallelExpression from './model/DSWorkflowExpressionTypesParallelExpression';
import DSWorkflowIndexOfExpression from './model/DSWorkflowIndexOfExpression';
import DSWorkflowLane from './model/DSWorkflowLane';
import DSWorkflowLastIndexOfExpression from './model/DSWorkflowLastIndexOfExpression';
import DSWorkflowLogicalOperatorTypes from './model/DSWorkflowLogicalOperatorTypes';
import DSWorkflowParallelExpression from './model/DSWorkflowParallelExpression';
import DSWorkflowReplaceExpression from './model/DSWorkflowReplaceExpression';
import DSWorkflowStep from './model/DSWorkflowStep';
import DSWorkflowStepTypesDSDocGen from './model/DSWorkflowStepTypesDSDocGen';
import DSWorkflowStepTypesDSIdv from './model/DSWorkflowStepTypesDSIdv';
import DSWorkflowStepTypesDSIfElse from './model/DSWorkflowStepTypesDSIfElse';
import DSWorkflowStepTypesDSSign from './model/DSWorkflowStepTypesDSSign';
import DSWorkflowStepTypesDSTransformation from './model/DSWorkflowStepTypesDSTransformation';
import DSWorkflowStepTypesDSWebForms from './model/DSWorkflowStepTypesDSWebForms';
import DSWorkflowStepTypesDoUntil from './model/DSWorkflowStepTypesDoUntil';
import DSWorkflowStepTypesLoop from './model/DSWorkflowStepTypesLoop';
import DSWorkflowStepTypesParallel from './model/DSWorkflowStepTypesParallel';
import DSWorkflowSubstringExpression from './model/DSWorkflowSubstringExpression';
import DSWorkflowToLowerExpression from './model/DSWorkflowToLowerExpression';
import DSWorkflowToUpperExpression from './model/DSWorkflowToUpperExpression';
import DSWorkflowTransformationExpression from './model/DSWorkflowTransformationExpression';
import DSWorkflowTransformationExpressionTypesConcatExpression from './model/DSWorkflowTransformationExpressionTypesConcatExpression';
import DSWorkflowTransformationExpressionTypesIndexOfExpression from './model/DSWorkflowTransformationExpressionTypesIndexOfExpression';
import DSWorkflowTransformationExpressionTypesLastIndexOfExpression from './model/DSWorkflowTransformationExpressionTypesLastIndexOfExpression';
import DSWorkflowTransformationExpressionTypesReplaceExpression from './model/DSWorkflowTransformationExpressionTypesReplaceExpression';
import DSWorkflowTransformationExpressionTypesSubstringExpression from './model/DSWorkflowTransformationExpressionTypesSubstringExpression';
import DSWorkflowTransformationExpressionTypesToLowerExpression from './model/DSWorkflowTransformationExpressionTypesToLowerExpression';
import DSWorkflowTransformationExpressionTypesToUpperExpression from './model/DSWorkflowTransformationExpressionTypesToUpperExpression';
import DSWorkflowTrigger from './model/DSWorkflowTrigger';
import DSWorkflowTriggerTypes from './model/DSWorkflowTriggerTypes';
import DSWorkflowVariable from './model/DSWorkflowVariable';
import DSWorkflowVariableFromParticipant from './model/DSWorkflowVariableFromParticipant';
import DSWorkflowVariableFromStep from './model/DSWorkflowVariableFromStep';
import DSWorkflowVariableFromVariable from './model/DSWorkflowVariableFromVariable';
import DSWorkflowVariableSourceTypesParticipant from './model/DSWorkflowVariableSourceTypesParticipant';
import DSWorkflowVariableSourceTypesStep from './model/DSWorkflowVariableSourceTypesStep';
import DSWorkflowVariableSourceTypesVariable from './model/DSWorkflowVariableSourceTypesVariable';
import DeployRequest from './model/DeployRequest';
import DeployResponse from './model/DeployResponse';
import DeployStatus from './model/DeployStatus';
import DeploymentStatus from './model/DeploymentStatus';
import ESignDocumentFromESignTemplate from './model/ESignDocumentFromESignTemplate';
import ESignDocumentFromPreviousStep from './model/ESignDocumentFromPreviousStep';
import ESignDocumentTypesFromDSTemplate from './model/ESignDocumentTypesFromDSTemplate';
import ESignDocumentTypesFromPreviousStep from './model/ESignDocumentTypesFromPreviousStep';
import ESignDocuments from './model/ESignDocuments';
import ESignSigner from './model/ESignSigner';
import ESignTabs from './model/ESignTabs';
import ESignTabsRecord from './model/ESignTabsRecord';
import ErrorCodes from './model/ErrorCodes';
import ErrorResponse from './model/ErrorResponse';
import EventTypes from './model/EventTypes';
import GetConfigurationInstanceResponse from './model/GetConfigurationInstanceResponse';
import GetConfigurationInstancesResponse from './model/GetConfigurationInstancesResponse';
import GetConfigurationInstancesResponseConfigInstancesInner from './model/GetConfigurationInstancesResponseConfigInstancesInner';
import GetVersion200Response from './model/GetVersion200Response';
import HttpTypes from './model/HttpTypes';
import InvalidWorkflowResponse from './model/InvalidWorkflowResponse';
import NewOrUpdatedWorkflowDefinitionResponse from './model/NewOrUpdatedWorkflowDefinitionResponse';
import NumberOrVariable from './model/NumberOrVariable';
import Participant from './model/Participant';
import ParticipantKeys from './model/ParticipantKeys';
import ProgressInstance from './model/ProgressInstance';
import ReplicationStatus from './model/ReplicationStatus';
import StartedByInstance from './model/StartedByInstance';
import StringOrVariableOrTransformation from './model/StringOrVariableOrTransformation';
import SuccessMessageResponse from './model/SuccessMessageResponse';
import ValidationErrors from './model/ValidationErrors';
import WorkflowDefinition from './model/WorkflowDefinition';
import WorkflowDefinitionList from './model/WorkflowDefinitionList';
import WorkflowDefinitionMetadata from './model/WorkflowDefinitionMetadata';
import WorkflowDefinitionWithId from './model/WorkflowDefinitionWithId';
import WorkflowDeleteResponse from './model/WorkflowDeleteResponse';
import WorkflowInstance from './model/WorkflowInstance';
import WorkflowInstanceState from './model/WorkflowInstanceState';
import WorkflowInstancesList from './model/WorkflowInstancesList';
import WorkflowMetadataStatus from './model/WorkflowMetadataStatus';
import WorkflowStepError from './model/WorkflowStepError';
import WorkflowStepErrorError from './model/WorkflowStepErrorError';
import WorkflowStepHistory from './model/WorkflowStepHistory';
import WorkflowStepHistoryList from './model/WorkflowStepHistoryList';
import WorkflowStepHistoryState from './model/WorkflowStepHistoryState';
import WriteConfigurationInstanceRequest from './model/WriteConfigurationInstanceRequest';
import WriteConfigurationInstancesRequest from './model/WriteConfigurationInstancesRequest';
import WriteConfigurationInstancesRequestConfigInstancesInner from './model/WriteConfigurationInstancesRequestConfigInstancesInner';
import DefaultApi from './api/DefaultApi';
import WorkflowInstanceManagementApi from './api/WorkflowInstanceManagementApi';
import WorkflowManagementApi from './api/WorkflowManagementApi';


/**
* Workflows authors and executes experiences that allow non-coders the ability to define Simple Business Process without having to write code and to deploy them seamlessly without having to have development expertise.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WorkflowsApis = require('index'); // See note below*.
* var xxxSvc = new WorkflowsApis.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WorkflowsApis.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WorkflowsApis.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WorkflowsApis.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CancelResponse model constructor.
     * @property {module:model/CancelResponse}
     */
    CancelResponse,

    /**
     * The DSDoUntilStep model constructor.
     * @property {module:model/DSDoUntilStep}
     */
    DSDoUntilStep,

    /**
     * The DSDocGenStep model constructor.
     * @property {module:model/DSDocGenStep}
     */
    DSDocGenStep,

    /**
     * The DSDocGenStepInput model constructor.
     * @property {module:model/DSDocGenStepInput}
     */
    DSDocGenStepInput,

    /**
     * The DSIdvStep model constructor.
     * @property {module:model/DSIdvStep}
     */
    DSIdvStep,

    /**
     * The DSIdvStepInput model constructor.
     * @property {module:model/DSIdvStepInput}
     */
    DSIdvStepInput,

    /**
     * The DSIdvStepInputRetryLimit model constructor.
     * @property {module:model/DSIdvStepInputRetryLimit}
     */
    DSIdvStepInputRetryLimit,

    /**
     * The DSIfElseStep model constructor.
     * @property {module:model/DSIfElseStep}
     */
    DSIfElseStep,

    /**
     * The DSLoopStep model constructor.
     * @property {module:model/DSLoopStep}
     */
    DSLoopStep,

    /**
     * The DSParallelStep model constructor.
     * @property {module:model/DSParallelStep}
     */
    DSParallelStep,

    /**
     * The DSServiceStep model constructor.
     * @property {module:model/DSServiceStep}
     */
    DSServiceStep,

    /**
     * The DSSignStep model constructor.
     * @property {module:model/DSSignStep}
     */
    DSSignStep,

    /**
     * The DSSignStepInput model constructor.
     * @property {module:model/DSSignStepInput}
     */
    DSSignStepInput,

    /**
     * The DSTransformationStep model constructor.
     * @property {module:model/DSTransformationStep}
     */
    DSTransformationStep,

    /**
     * The DSWebFormsStep model constructor.
     * @property {module:model/DSWebFormsStep}
     */
    DSWebFormsStep,

    /**
     * The DSWebFormsStepConfig model constructor.
     * @property {module:model/DSWebFormsStepConfig}
     */
    DSWebFormsStepConfig,

    /**
     * The DSWorkflowBooleanExpression model constructor.
     * @property {module:model/DSWorkflowBooleanExpression}
     */
    DSWorkflowBooleanExpression,

    /**
     * The DSWorkflowBooleanExpressionExpressionsInner model constructor.
     * @property {module:model/DSWorkflowBooleanExpressionExpressionsInner}
     */
    DSWorkflowBooleanExpressionExpressionsInner,

    /**
     * The DSWorkflowComparisonExpression model constructor.
     * @property {module:model/DSWorkflowComparisonExpression}
     */
    DSWorkflowComparisonExpression,

    /**
     * The DSWorkflowComparisonExpressionLeftOperand model constructor.
     * @property {module:model/DSWorkflowComparisonExpressionLeftOperand}
     */
    DSWorkflowComparisonExpressionLeftOperand,

    /**
     * The DSWorkflowComparisonOperatorTypes model constructor.
     * @property {module:model/DSWorkflowComparisonOperatorTypes}
     */
    DSWorkflowComparisonOperatorTypes,

    /**
     * The DSWorkflowConcatExpression model constructor.
     * @property {module:model/DSWorkflowConcatExpression}
     */
    DSWorkflowConcatExpression,

    /**
     * The DSWorkflowDocGenDocOutputFormat model constructor.
     * @property {module:model/DSWorkflowDocGenDocOutputFormat}
     */
    DSWorkflowDocGenDocOutputFormat,

    /**
     * The DSWorkflowExpressionTypesBooleanExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesBooleanExpression}
     */
    DSWorkflowExpressionTypesBooleanExpression,

    /**
     * The DSWorkflowExpressionTypesComparisonExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesComparisonExpression}
     */
    DSWorkflowExpressionTypesComparisonExpression,

    /**
     * The DSWorkflowExpressionTypesParallelExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesParallelExpression}
     */
    DSWorkflowExpressionTypesParallelExpression,

    /**
     * The DSWorkflowIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowIndexOfExpression}
     */
    DSWorkflowIndexOfExpression,

    /**
     * The DSWorkflowLane model constructor.
     * @property {module:model/DSWorkflowLane}
     */
    DSWorkflowLane,

    /**
     * The DSWorkflowLastIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowLastIndexOfExpression}
     */
    DSWorkflowLastIndexOfExpression,

    /**
     * The DSWorkflowLogicalOperatorTypes model constructor.
     * @property {module:model/DSWorkflowLogicalOperatorTypes}
     */
    DSWorkflowLogicalOperatorTypes,

    /**
     * The DSWorkflowParallelExpression model constructor.
     * @property {module:model/DSWorkflowParallelExpression}
     */
    DSWorkflowParallelExpression,

    /**
     * The DSWorkflowReplaceExpression model constructor.
     * @property {module:model/DSWorkflowReplaceExpression}
     */
    DSWorkflowReplaceExpression,

    /**
     * The DSWorkflowStep model constructor.
     * @property {module:model/DSWorkflowStep}
     */
    DSWorkflowStep,

    /**
     * The DSWorkflowStepTypesDSDocGen model constructor.
     * @property {module:model/DSWorkflowStepTypesDSDocGen}
     */
    DSWorkflowStepTypesDSDocGen,

    /**
     * The DSWorkflowStepTypesDSIdv model constructor.
     * @property {module:model/DSWorkflowStepTypesDSIdv}
     */
    DSWorkflowStepTypesDSIdv,

    /**
     * The DSWorkflowStepTypesDSIfElse model constructor.
     * @property {module:model/DSWorkflowStepTypesDSIfElse}
     */
    DSWorkflowStepTypesDSIfElse,

    /**
     * The DSWorkflowStepTypesDSSign model constructor.
     * @property {module:model/DSWorkflowStepTypesDSSign}
     */
    DSWorkflowStepTypesDSSign,

    /**
     * The DSWorkflowStepTypesDSTransformation model constructor.
     * @property {module:model/DSWorkflowStepTypesDSTransformation}
     */
    DSWorkflowStepTypesDSTransformation,

    /**
     * The DSWorkflowStepTypesDSWebForms model constructor.
     * @property {module:model/DSWorkflowStepTypesDSWebForms}
     */
    DSWorkflowStepTypesDSWebForms,

    /**
     * The DSWorkflowStepTypesDoUntil model constructor.
     * @property {module:model/DSWorkflowStepTypesDoUntil}
     */
    DSWorkflowStepTypesDoUntil,

    /**
     * The DSWorkflowStepTypesLoop model constructor.
     * @property {module:model/DSWorkflowStepTypesLoop}
     */
    DSWorkflowStepTypesLoop,

    /**
     * The DSWorkflowStepTypesParallel model constructor.
     * @property {module:model/DSWorkflowStepTypesParallel}
     */
    DSWorkflowStepTypesParallel,

    /**
     * The DSWorkflowSubstringExpression model constructor.
     * @property {module:model/DSWorkflowSubstringExpression}
     */
    DSWorkflowSubstringExpression,

    /**
     * The DSWorkflowToLowerExpression model constructor.
     * @property {module:model/DSWorkflowToLowerExpression}
     */
    DSWorkflowToLowerExpression,

    /**
     * The DSWorkflowToUpperExpression model constructor.
     * @property {module:model/DSWorkflowToUpperExpression}
     */
    DSWorkflowToUpperExpression,

    /**
     * The DSWorkflowTransformationExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpression}
     */
    DSWorkflowTransformationExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesConcatExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesConcatExpression}
     */
    DSWorkflowTransformationExpressionTypesConcatExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesIndexOfExpression}
     */
    DSWorkflowTransformationExpressionTypesIndexOfExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesLastIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesLastIndexOfExpression}
     */
    DSWorkflowTransformationExpressionTypesLastIndexOfExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesReplaceExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesReplaceExpression}
     */
    DSWorkflowTransformationExpressionTypesReplaceExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesSubstringExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesSubstringExpression}
     */
    DSWorkflowTransformationExpressionTypesSubstringExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesToLowerExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesToLowerExpression}
     */
    DSWorkflowTransformationExpressionTypesToLowerExpression,

    /**
     * The DSWorkflowTransformationExpressionTypesToUpperExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesToUpperExpression}
     */
    DSWorkflowTransformationExpressionTypesToUpperExpression,

    /**
     * The DSWorkflowTrigger model constructor.
     * @property {module:model/DSWorkflowTrigger}
     */
    DSWorkflowTrigger,

    /**
     * The DSWorkflowTriggerTypes model constructor.
     * @property {module:model/DSWorkflowTriggerTypes}
     */
    DSWorkflowTriggerTypes,

    /**
     * The DSWorkflowVariable model constructor.
     * @property {module:model/DSWorkflowVariable}
     */
    DSWorkflowVariable,

    /**
     * The DSWorkflowVariableFromParticipant model constructor.
     * @property {module:model/DSWorkflowVariableFromParticipant}
     */
    DSWorkflowVariableFromParticipant,

    /**
     * The DSWorkflowVariableFromStep model constructor.
     * @property {module:model/DSWorkflowVariableFromStep}
     */
    DSWorkflowVariableFromStep,

    /**
     * The DSWorkflowVariableFromVariable model constructor.
     * @property {module:model/DSWorkflowVariableFromVariable}
     */
    DSWorkflowVariableFromVariable,

    /**
     * The DSWorkflowVariableSourceTypesParticipant model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesParticipant}
     */
    DSWorkflowVariableSourceTypesParticipant,

    /**
     * The DSWorkflowVariableSourceTypesStep model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesStep}
     */
    DSWorkflowVariableSourceTypesStep,

    /**
     * The DSWorkflowVariableSourceTypesVariable model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesVariable}
     */
    DSWorkflowVariableSourceTypesVariable,

    /**
     * The DeployRequest model constructor.
     * @property {module:model/DeployRequest}
     */
    DeployRequest,

    /**
     * The DeployResponse model constructor.
     * @property {module:model/DeployResponse}
     */
    DeployResponse,

    /**
     * The DeployStatus model constructor.
     * @property {module:model/DeployStatus}
     */
    DeployStatus,

    /**
     * The DeploymentStatus model constructor.
     * @property {module:model/DeploymentStatus}
     */
    DeploymentStatus,

    /**
     * The ESignDocumentFromESignTemplate model constructor.
     * @property {module:model/ESignDocumentFromESignTemplate}
     */
    ESignDocumentFromESignTemplate,

    /**
     * The ESignDocumentFromPreviousStep model constructor.
     * @property {module:model/ESignDocumentFromPreviousStep}
     */
    ESignDocumentFromPreviousStep,

    /**
     * The ESignDocumentTypesFromDSTemplate model constructor.
     * @property {module:model/ESignDocumentTypesFromDSTemplate}
     */
    ESignDocumentTypesFromDSTemplate,

    /**
     * The ESignDocumentTypesFromPreviousStep model constructor.
     * @property {module:model/ESignDocumentTypesFromPreviousStep}
     */
    ESignDocumentTypesFromPreviousStep,

    /**
     * The ESignDocuments model constructor.
     * @property {module:model/ESignDocuments}
     */
    ESignDocuments,

    /**
     * The ESignSigner model constructor.
     * @property {module:model/ESignSigner}
     */
    ESignSigner,

    /**
     * The ESignTabs model constructor.
     * @property {module:model/ESignTabs}
     */
    ESignTabs,

    /**
     * The ESignTabsRecord model constructor.
     * @property {module:model/ESignTabsRecord}
     */
    ESignTabsRecord,

    /**
     * The ErrorCodes model constructor.
     * @property {module:model/ErrorCodes}
     */
    ErrorCodes,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The EventTypes model constructor.
     * @property {module:model/EventTypes}
     */
    EventTypes,

    /**
     * The GetConfigurationInstanceResponse model constructor.
     * @property {module:model/GetConfigurationInstanceResponse}
     */
    GetConfigurationInstanceResponse,

    /**
     * The GetConfigurationInstancesResponse model constructor.
     * @property {module:model/GetConfigurationInstancesResponse}
     */
    GetConfigurationInstancesResponse,

    /**
     * The GetConfigurationInstancesResponseConfigInstancesInner model constructor.
     * @property {module:model/GetConfigurationInstancesResponseConfigInstancesInner}
     */
    GetConfigurationInstancesResponseConfigInstancesInner,

    /**
     * The GetVersion200Response model constructor.
     * @property {module:model/GetVersion200Response}
     */
    GetVersion200Response,

    /**
     * The HttpTypes model constructor.
     * @property {module:model/HttpTypes}
     */
    HttpTypes,

    /**
     * The InvalidWorkflowResponse model constructor.
     * @property {module:model/InvalidWorkflowResponse}
     */
    InvalidWorkflowResponse,

    /**
     * The NewOrUpdatedWorkflowDefinitionResponse model constructor.
     * @property {module:model/NewOrUpdatedWorkflowDefinitionResponse}
     */
    NewOrUpdatedWorkflowDefinitionResponse,

    /**
     * The NumberOrVariable model constructor.
     * @property {module:model/NumberOrVariable}
     */
    NumberOrVariable,

    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant,

    /**
     * The ParticipantKeys model constructor.
     * @property {module:model/ParticipantKeys}
     */
    ParticipantKeys,

    /**
     * The ProgressInstance model constructor.
     * @property {module:model/ProgressInstance}
     */
    ProgressInstance,

    /**
     * The ReplicationStatus model constructor.
     * @property {module:model/ReplicationStatus}
     */
    ReplicationStatus,

    /**
     * The StartedByInstance model constructor.
     * @property {module:model/StartedByInstance}
     */
    StartedByInstance,

    /**
     * The StringOrVariableOrTransformation model constructor.
     * @property {module:model/StringOrVariableOrTransformation}
     */
    StringOrVariableOrTransformation,

    /**
     * The SuccessMessageResponse model constructor.
     * @property {module:model/SuccessMessageResponse}
     */
    SuccessMessageResponse,

    /**
     * The ValidationErrors model constructor.
     * @property {module:model/ValidationErrors}
     */
    ValidationErrors,

    /**
     * The WorkflowDefinition model constructor.
     * @property {module:model/WorkflowDefinition}
     */
    WorkflowDefinition,

    /**
     * The WorkflowDefinitionList model constructor.
     * @property {module:model/WorkflowDefinitionList}
     */
    WorkflowDefinitionList,

    /**
     * The WorkflowDefinitionMetadata model constructor.
     * @property {module:model/WorkflowDefinitionMetadata}
     */
    WorkflowDefinitionMetadata,

    /**
     * The WorkflowDefinitionWithId model constructor.
     * @property {module:model/WorkflowDefinitionWithId}
     */
    WorkflowDefinitionWithId,

    /**
     * The WorkflowDeleteResponse model constructor.
     * @property {module:model/WorkflowDeleteResponse}
     */
    WorkflowDeleteResponse,

    /**
     * The WorkflowInstance model constructor.
     * @property {module:model/WorkflowInstance}
     */
    WorkflowInstance,

    /**
     * The WorkflowInstanceState model constructor.
     * @property {module:model/WorkflowInstanceState}
     */
    WorkflowInstanceState,

    /**
     * The WorkflowInstancesList model constructor.
     * @property {module:model/WorkflowInstancesList}
     */
    WorkflowInstancesList,

    /**
     * The WorkflowMetadataStatus model constructor.
     * @property {module:model/WorkflowMetadataStatus}
     */
    WorkflowMetadataStatus,

    /**
     * The WorkflowStepError model constructor.
     * @property {module:model/WorkflowStepError}
     */
    WorkflowStepError,

    /**
     * The WorkflowStepErrorError model constructor.
     * @property {module:model/WorkflowStepErrorError}
     */
    WorkflowStepErrorError,

    /**
     * The WorkflowStepHistory model constructor.
     * @property {module:model/WorkflowStepHistory}
     */
    WorkflowStepHistory,

    /**
     * The WorkflowStepHistoryList model constructor.
     * @property {module:model/WorkflowStepHistoryList}
     */
    WorkflowStepHistoryList,

    /**
     * The WorkflowStepHistoryState model constructor.
     * @property {module:model/WorkflowStepHistoryState}
     */
    WorkflowStepHistoryState,

    /**
     * The WriteConfigurationInstanceRequest model constructor.
     * @property {module:model/WriteConfigurationInstanceRequest}
     */
    WriteConfigurationInstanceRequest,

    /**
     * The WriteConfigurationInstancesRequest model constructor.
     * @property {module:model/WriteConfigurationInstancesRequest}
     */
    WriteConfigurationInstancesRequest,

    /**
     * The WriteConfigurationInstancesRequestConfigInstancesInner model constructor.
     * @property {module:model/WriteConfigurationInstancesRequestConfigInstancesInner}
     */
    WriteConfigurationInstancesRequestConfigInstancesInner,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The WorkflowInstanceManagementApi service constructor.
    * @property {module:api/WorkflowInstanceManagementApi}
    */
    WorkflowInstanceManagementApi,

    /**
    * The WorkflowManagementApi service constructor.
    * @property {module:api/WorkflowManagementApi}
    */
    WorkflowManagementApi
};
