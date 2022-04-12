import BackendAPI from 'CommonUI/src/utils/api/backend';
import { Dispatch } from 'redux';
import * as types from '../constants/sso';
import ErrorPayload from 'CommonUI/src/payload-types/error';
export const createSsoRequest = (): void => ({
    type: types.CREATE_SSO_REQUEST,
});
export const createSsoSuccess = (payload: $TSFixMe): void => ({
    type: types.CREATE_SSO_SUCCESS,
    payload,
});
export const createSsoFailure = (error: ErrorPayload): void => ({
    type: types.CREATE_SSO_FAILURE,
    payload: error,
});
export const createSso = ({ data }: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.post(`sso`, data);
        dispatch(createSsoRequest());

        promise.then(
            function (response): void {
                dispatch(createSsoSuccess(response.data));
            },
            function (error): void {
                dispatch(createSsoFailure(error));
            }
        );
        return promise;
    };
};

export const fetchSsosRequest = (): void => ({
    type: types.FETCH_SSOS_REQUEST,
});
export const fetchSsosSuccess = (payload: $TSFixMe): void => ({
    type: types.FETCH_SSOS_SUCCESS,
    payload,
});
export const fetchSsosFailure = (error: ErrorPayload): void => ({
    type: types.FETCH_SSOS_FAILURE,
    payload: error,
});
export const fetchSsos = ({ projectId, skip, limit }: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        skip = skip ? parseInt(skip) : 0;
        limit = limit ? parseInt(limit) : 10;

        const promise = BackendAPI.get(
            `sso/${projectId}/ssos?skip=${skip}&limit=${limit}`
        );
        dispatch(fetchSsosRequest());

        promise.then(
            function (response): void {
                dispatch(fetchSsosSuccess(response.data));
            },
            function (error): void {
                dispatch(fetchSsosFailure(error));
            }
        );
        return promise;
    };
};

export const fetchSsoRequest = (): void => ({
    type: types.FETCH_SSO_REQUEST,
});
export const fetchSsoSuccess = (payload: $TSFixMe): void => ({
    type: types.FETCH_SSO_SUCCESS,
    payload,
});
export const fetchSsoFailure = (error: ErrorPayload): void => ({
    type: types.FETCH_SSO_FAILURE,
    payload: error,
});
export const fetchSso = (ssoId: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.get(`sso/${ssoId}`);
        dispatch(fetchSsoRequest());

        promise.then(
            function (response): void {
                dispatch(fetchSsoSuccess(response.data));
            },
            function (error): void {
                dispatch(fetchSsoFailure(error));
            }
        );
        return promise;
    };
};

export const updateSsoRequest = (): void => ({
    type: types.UPDATE_SSO_REQUEST,
});
export const updateSsoSuccess = (payload: $TSFixMe): void => ({
    type: types.UPDATE_SSO_SUCCESS,
    payload,
});
export const updateSsoFailure = (error: ErrorPayload): void => ({
    type: types.UPDATE_SSO_FAILURE,
    payload: error,
});
export const updateSso = ({ id, data }: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        const promise = BackendAPI.put(`sso/${id}`, data);
        dispatch(updateSsoRequest());

        promise.then(
            function (response): void {
                dispatch(updateSsoSuccess(response.data));
            },
            function (error): void {
                dispatch(updateSsoFailure(error));
            }
        );
        return promise;
    };
};

export const deleteSsoRequest = (): void => ({
    type: types.DELETE_SSO_REQUEST,
});
export const deleteSsoSuccess = (payload: $TSFixMe): void => ({
    type: types.DELETE_SSO_SUCCESS,
    payload,
});
export const deleteSsoFailure = (error: ErrorPayload): void => ({
    type: types.DELETE_SSO_FAILURE,
    payload: error,
});
export const deleteSso = (ssoId: $TSFixMe): void => {
    return function (dispatch: Dispatch): void {
        const promise = delete `sso/${ssoId}`;
        dispatch(deleteSsoRequest());

        promise.then(
            function (response): void {
                dispatch(deleteSsoSuccess(response.data));
            },
            function (error): void {
                dispatch(deleteSsoFailure(error));
            }
        );
        return promise;
    };
};
