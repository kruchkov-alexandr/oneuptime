import * as types from '../constants/security';
import BackendAPI from 'CommonUI/src/utils/api/backend';
import { Dispatch } from 'redux';
import ErrorPayload from 'CommonUI/src/payload-types/error';
// Add Container Security
export const addContainerSecurityRequest = (): void => ({
    type: types.ADD_CONTAINER_SECURITY_REQUEST,
});

export const addContainerSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.ADD_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const addContainerSecurityFailure = (error: ErrorPayload): void => ({
    type: types.ADD_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const addContainerSecurity =
    ({ projectId, componentId, data }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(addContainerSecurityRequest());

        try {
            const response = await BackendAPI.post(
                `security/${projectId}/${componentId}/container`,
                data
            );

            dispatch(addContainerSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(addContainerSecurityFailure(errorMsg));
        }
    };

// Get a Container Security
export const getContainerSecurityRequest = (): void => ({
    type: types.GET_CONTAINER_SECURITY_REQUEST,
});

export const getContainerSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.GET_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const getContainerSecurityFailure = (error: ErrorPayload): void => ({
    type: types.GET_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const getContainerSecurity =
    ({ projectId, componentId, containerSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecurityRequest());

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/container/${containerSecurityId}`
            );

            dispatch(getContainerSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecurityFailure(errorMsg));
        }
    };

export const getContainerSecurityBySlug =
    ({ projectId, componentId, containerSecuritySlug }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecurityRequest());

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/containerSecuritySlug/${containerSecuritySlug}`
            );

            dispatch(getContainerSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecurityFailure(errorMsg));
        }
    };

// Get all Container Security
export const getContainerSecuritiesRequest = (
    fetchingPage: $TSFixMe
): void => ({
    type: types.GET_CONTAINER_SECURITIES_REQUEST,
    payload: fetchingPage,
});

export const getContainerSecuritiesSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_CONTAINER_SECURITIES_SUCCESS,
    payload,
});

export const getContainerSecuritiesFailure = (error: ErrorPayload): void => ({
    type: types.GET_CONTAINER_SECURITIES_FAILURE,
    payload: error,
});

export const getContainerSecurities =
    ({
        projectId,
        componentId,
        skip = 0,
        limit = 0,
        fetchingPage = false,
    }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecuritiesRequest(fetchingPage));

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/container?skip=${skip}&limit=${limit}`
            );

            dispatch(getContainerSecuritiesSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecuritiesFailure(errorMsg));
        }
    };

// Delete Container Security
export const deleteContainerSecurityRequest = (): void => ({
    type: types.DELETE_CONTAINER_SECURITY_REQUEST,
});

export const deleteContainerSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.DELETE_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const deleteContainerSecurityFailure = (error: ErrorPayload): void => ({
    type: types.DELETE_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const deleteContainerSecurity =
    ({ projectId, componentId, containerSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(deleteContainerSecurityRequest());

        try {
            const response =
                await delete `security/${projectId}/${componentId}/container/${containerSecurityId}`;

            dispatch(deleteContainerSecuritySuccess(response.data));

            // update the list of container securities
            dispatch(getContainerSecurities({ projectId, componentId }));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(deleteContainerSecurityFailure(errorMsg));
        }
    };

// Scan Container Security
export const scanContainerSecurityRequest = (): void => ({
    type: types.SCAN_CONTAINER_SECURITY_REQUEST,
});

export const scanContainerSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.SCAN_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const scanContainerSecurityFailure = (error: ErrorPayload): void => ({
    type: types.SCAN_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export const scanContainerSecurity =
    ({ projectId, containerSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(scanContainerSecurityRequest());
        dispatch(setActiveContainerSecurity(containerSecurityId));

        try {
            await BackendAPI.post(
                `security/${projectId}/container/scan/${containerSecurityId}`
            );
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(scanContainerSecurityFailure(errorMsg));
        }
    };

// Get a particular Container Security Log
export const getContainerSecurityLogRequest = (): void => ({
    type: types.GET_CONTAINER_SECURITY_LOG_REQUEST,
});

export const getContainerSecurityLogSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_CONTAINER_SECURITY_LOG_SUCCESS,
    payload,
});

export const getContainerSecurityLogFailure = (error: ErrorPayload): void => ({
    type: types.GET_CONTAINER_SECURITY_LOG_FAILURE,
    payload: error,
});

export const getContainerSecurityLog =
    ({ projectId, componentId, containerSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecurityLogRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/container/logs/${containerSecurityId}`
            );

            dispatch(getContainerSecurityLogSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecurityLogFailure(errorMsg));
        }
    };

export const getContainerSecurityLogBySlug =
    ({ projectId, componentId, containerSecuritySlug }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecurityLogRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/containerSecuritySlug/logs/${containerSecuritySlug}`
            );

            dispatch(getContainerSecurityLogSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecurityLogFailure(errorMsg));
        }
    };

// Get Container Security Logs in a component
export const getContainerSecurityLogsRequest = (): void => ({
    type: types.GET_CONTAINER_SECURITY_LOGS_REQUEST,
});

export const getContainerSecurityLogsSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_CONTAINER_SECURITY_LOGS_SUCCESS,
    payload,
});

export const getContainerSecurityLogsFailure = (error: ErrorPayload): void => ({
    type: types.GET_CONTAINER_SECURITY_LOGS_FAILURE,
    payload: error,
});

export const getContainerSecurityLogs =
    ({ projectId, componentId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getContainerSecurityLogsRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/container/logs`
            );

            dispatch(getContainerSecurityLogsSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getContainerSecurityLogsFailure(errorMsg));
        }
    };

// Edit container security
export const editContainerSecurityRequest = (): void => ({
    type: types.EDIT_CONTAINER_SECURITY_REQUEST,
});

export const editContainerSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.EDIT_CONTAINER_SECURITY_SUCCESS,
    payload,
});

export const editContainerSecurityFailure = (error: ErrorPayload): void => ({
    type: types.EDIT_CONTAINER_SECURITY_FAILURE,
    payload: error,
});

export function editContainerSecurity({
    projectId,
    componentId,
    containerSecurityId,
    data,
}: $TSFixMe) {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.put(
            `security/${projectId}/${componentId}/container/${containerSecurityId}`,
            data
        );
        dispatch(editContainerSecurityRequest());

        promise.then(
            function (response): void {
                dispatch(editContainerSecuritySuccess(response.data));
            },
            function (error): void {
                const errorMsg =
                    error.response && error.response.data
                        ? error.response.data
                        : error.data
                        ? error.data
                        : error.message
                        ? error.message
                        : 'Network Error';
                dispatch(editContainerSecurityFailure(errorMsg));
            }
        );

        return promise;
    };
}

// Add Application Security
export const addApplicationSecurityRequest = (): void => ({
    type: types.ADD_APPLICATION_SECURITY_REQUEST,
});

export const addApplicationSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.ADD_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const addApplicationSecurityFailure = (error: ErrorPayload): void => ({
    type: types.ADD_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const addApplicationSecurity =
    ({ projectId, componentId, data }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(addApplicationSecurityRequest());

        try {
            const response = await BackendAPI.post(
                `security/${projectId}/${componentId}/application`,
                data
            );

            dispatch(addApplicationSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(addApplicationSecurityFailure(errorMsg));
        }
    };

// Get an Application Security
export const getApplicationSecurityRequest = (): void => ({
    type: types.GET_APPLICATION_SECURITY_REQUEST,
});

export const getApplicationSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.GET_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const getApplicationSecurityFailure = (error: ErrorPayload): void => ({
    type: types.GET_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const getApplicationSecurity =
    ({ projectId, componentId, applicationSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecurityRequest());

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/application/${applicationSecurityId}`
            );

            dispatch(getApplicationSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecurityFailure(errorMsg));
        }
    };

export const getApplicationSecurityBySlug =
    ({ projectId, componentId, applicationSecuritySlug }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecurityRequest());

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/applicationSecuritySlug/${applicationSecuritySlug}`
            );

            dispatch(getApplicationSecuritySuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecurityFailure(errorMsg));
        }
    };

// Get all Application Security
export const getApplicationSecuritiesRequest = (
    fetchingPage: $TSFixMe
): void => ({
    type: types.GET_APPLICATION_SECURITIES_REQUEST,
    payload: fetchingPage,
});

export const getApplicationSecuritiesSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_APPLICATION_SECURITIES_SUCCESS,
    payload,
});

export const getApplicationSecuritiesFailure = (error: ErrorPayload): void => ({
    type: types.GET_APPLICATION_SECURITIES_FAILURE,
    payload: error,
});

export const getApplicationSecurities =
    ({
        projectId,
        componentId,
        skip = 0,
        limit = 0,
        fetchingPage = false,
    }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecuritiesRequest(fetchingPage));

        try {
            const response = await BackendAPI.get(
                `security/${projectId}/${componentId}/application?skip=${skip}&limit=${limit}`
            );

            dispatch(getApplicationSecuritiesSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecuritiesFailure(errorMsg));
        }
    };

// Delete Application Security
export const deleteApplicationSecurityRequest = (): void => ({
    type: types.DELETE_APPLICATION_SECURITY_REQUEST,
});

export const deleteApplicationSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.DELETE_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const deleteApplicationSecurityFailure = (
    error: ErrorPayload
): void => ({
    type: types.DELETE_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const deleteApplicationSecurity =
    ({ projectId, componentId, applicationSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(deleteApplicationSecurityRequest());

        try {
            const response =
                await delete `security/${projectId}/${componentId}/application/${applicationSecurityId}`;

            dispatch(deleteApplicationSecuritySuccess(response.data));

            // update the list of application securities
            dispatch(getApplicationSecurities({ projectId, componentId }));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(deleteApplicationSecurityFailure(errorMsg));
        }
    };

// Scan Application Security
export const scanApplicationSecurityRequest = (): void => ({
    type: types.SCAN_APPLICATION_SECURITY_REQUEST,
});

export const scanApplicationSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.SCAN_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const scanApplicationSecurityFailure = (error: ErrorPayload): void => ({
    type: types.SCAN_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export const scanApplicationSecurity =
    ({ projectId, applicationSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(scanApplicationSecurityRequest());
        dispatch(setActiveApplicationSecurity(applicationSecurityId));
        try {
            await BackendAPI.post(
                `security/${projectId}/application/scan/${applicationSecurityId}`
            );
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(scanApplicationSecurityFailure(errorMsg));
        }
    };

// Get a particular Application Security Log
export const getApplicationSecurityLogRequest = (): void => ({
    type: types.GET_APPLICATION_SECURITY_LOG_REQUEST,
});

export const getApplicationSecurityLogSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_APPLICATION_SECURITY_LOG_SUCCESS,
    payload,
});

export const getApplicationSecurityLogFailure = (
    error: ErrorPayload
): void => ({
    type: types.GET_APPLICATION_SECURITY_LOG_FAILURE,
    payload: error,
});

export const getApplicationSecurityLog =
    ({ projectId, componentId, applicationSecurityId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecurityLogRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/application/logs/${applicationSecurityId}`
            );

            dispatch(getApplicationSecurityLogSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecurityLogFailure(errorMsg));
        }
    };

export const getApplicationSecurityLogBySlug =
    ({ projectId, componentId, applicationSecuritySlug }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecurityLogRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/applicationSecuritySlug/logs/${applicationSecuritySlug}`
            );

            dispatch(getApplicationSecurityLogSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecurityLogFailure(errorMsg));
        }
    };

// Get Application Security Logs in a component
export const getApplicationSecurityLogsRequest = (): void => ({
    type: types.GET_APPLICATION_SECURITY_LOGS_REQUEST,
});

export const getApplicationSecurityLogsSuccess = (payload: $TSFixMe): void => ({
    type: types.GET_APPLICATION_SECURITY_LOGS_SUCCESS,
    payload,
});

export const getApplicationSecurityLogsFailure = (
    error: ErrorPayload
): void => ({
    type: types.GET_APPLICATION_SECURITY_LOGS_FAILURE,
    payload: error,
});

export const getApplicationSecurityLogs =
    ({ projectId, componentId }: $TSFixMe) =>
    async (dispatch: Dispatch) => {
        dispatch(getApplicationSecurityLogsRequest());

        try {
            const response = await BackendAPI.get(
                `securityLog/${projectId}/${componentId}/application/logs`
            );

            dispatch(getApplicationSecurityLogsSuccess(response.data));
        } catch (error) {
            const errorMsg =
                error.response && error.response.data
                    ? error.response.data
                    : error.data
                    ? error.data
                    : error.message
                    ? error.message
                    : 'Network Error';
            dispatch(getApplicationSecurityLogsFailure(errorMsg));
        }
    };

// Edit application security
export const editApplicationSecurityRequest = (): void => ({
    type: types.EDIT_APPLICATION_SECURITY_REQUEST,
});

export const editApplicationSecuritySuccess = (payload: $TSFixMe): void => ({
    type: types.EDIT_APPLICATION_SECURITY_SUCCESS,
    payload,
});

export const editApplicationSecurityFailure = (error: ErrorPayload): void => ({
    type: types.EDIT_APPLICATION_SECURITY_FAILURE,
    payload: error,
});

export function editApplicationSecurity({
    projectId,
    componentId,
    applicationSecurityId,
    data,
}: $TSFixMe) {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.put(
            `security/${projectId}/${componentId}/application/${applicationSecurityId}`,
            data
        );
        dispatch(editApplicationSecurityRequest());

        promise.then(
            function (response): void {
                dispatch(editApplicationSecuritySuccess(response.data));
            },
            function (error): void {
                const errorMsg =
                    error.response && error.response.data
                        ? error.response.data
                        : error.data
                        ? error.data
                        : error.message
                        ? error.message
                        : 'Network Error';
                dispatch(editApplicationSecurityFailure(errorMsg));
            }
        );

        return promise;
    };
}

export const setActiveApplicationSecurity = (payload: $TSFixMe): void => ({
    type: types.SET_ACTIVE_APPLICATION_SECURITY,
    payload,
});

export const setActiveContainerSecurity = (payload: $TSFixMe): void => ({
    type: types.SET_ACTIVE_CONTAINER_SECURITY,
    payload,
});
