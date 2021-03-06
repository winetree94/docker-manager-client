import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../util/secrets';
import { GetToken } from '../components/models/authentication/get_token';
import { ServerResponse } from 'http';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TokenResponse {
  token: string;
}

/**
 * get authentication token
 * @param {string} email - email
 * @param {string} password - password
 */
export function login(params: LoginRequest): Promise<AxiosResponse<TokenResponse>> {
  return axios.request<TokenResponse>({
    url: `${API_URL}/users/token`,
    method: 'post',
    headers: {
      contentType: 'application/json',
    },
    data: params,
  });
}

export interface TokenValidationRequest {
  token: string;
}

export interface TokenValidationResponse {
  result: boolean;
}

/**
 * get token validation result
 * @param {TokenValidationRequest} params - token
 */
export function validateToken(params: TokenValidationRequest): Promise<AxiosResponse<TokenValidationResponse>> {
  return axios.request<TokenValidationResponse>({
    url: `${API_URL}/users/token`,
    method: 'get',
    headers: {
      authorization: params.token,
    },
  });
}

export function register(email: string, password: string): Promise<AxiosResponse> {
  return axios.request({});
}
