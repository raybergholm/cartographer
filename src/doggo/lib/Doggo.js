const request = require("superagent");

const SupportedHttpMethods = Object.freeze({
    Options: "options",
    Head: "head",
    Get: "get",
    Post: "post",
    Put: "put",
    Patch: "patch",
    Delete: "delete"
});

class Doggo {
    constructor({ host = null, headers = null, queryParams = null, settle = false, debug = false }) {
        // Default values: set these if all calls have common settings which won't change. You can still override these values on a per call basis.
        this.host = host;
        this.headers = headers;
        this.queryParams = queryParams;
        
        // Set true: use Promise.settle behaviour (always resolve, return the error in the resolved payload).
        // Set false: to allow promises to reject (standard Promise behaviour)
        this._settle = settle; 
        
        this._debug = debug; // set true to enable all the console log statements

        this._request = request; // HTTP library
    }

    static get HttpMethods() {
        return SupportedHttpMethods;
    }

    _applyOverrides({ host, headers = null, queryParams = null }) {
        return {
            host: host || this.host,
            headers: Object.assign({}, this.headers, headers),
            queryParams: Object.assign({}, this.queryParams, queryParams)
        };   
    }

    async request({ method, ...rest }) {
        switch (method.toLower()) {
            case Doggo.HttpMethods.Options:
                return this.options(rest);
            case Doggo.HttpMethods.Head:
                return this.head(rest);
            case Doggo.HttpMethods.Get:
                return this.get(rest);
            case Doggo.HttpMethods.Post:
                return this.post(rest);
            case Doggo.HttpMethods.Put:
                return this.put(rest);
            case Doggo.HttpMethods.Patch:
                return this.patch(rest);
            case Doggo.HttpMethods.Delete:
                return this.delete(rest);
            default:
                throw new Error(`Unsupported method ${method}`)
        }
    }

    async options({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo OPTIONS error: No host!");
        }

        // queryParams and body are deconstructed but unused: filter them out of the passthrough

        const { 
            host: _host,
            headers: _headers
        } = this._applyOverrides({ host, headers });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async head({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo HEAD error: No host!");
        }

        // queryParams and body are deconstructed but unused: filter them out of the passthrough

        const { 
            host: _host,
            headers: _headers
        } = this._applyOverrides({ host, headers });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async get({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo GET error: No host!");
        }

        // body is deconstructed but unused: filter them out of the passthrough

        const { 
            host: _host,
            headers: _headers,
            queryParams: _queryParams
        } = this._applyOverrides({ host, headers, queryParams });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers)
            .query(_queryParams);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async post({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo POST error: No host!");
        }

        const { 
            host: _host,
            headers: _headers,
            queryParams: _queryParams
        } = this._applyOverrides({ host, headers, queryParams });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers)
            .query(_queryParams)
            .send(body);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async put({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo PUT error: No host!");
        }

        const { 
            host: _host,
            headers: _headers,
            queryParams: _queryParams
        } = this._applyOverrides({ host, headers, queryParams });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers)
            .query(_queryParams)
            .send(body);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async patch({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) {
        if (!this.host && !host) {
            throw new Error("Doggo PATCH error: No host!");
        }

        const { 
            host: _host,
            headers: _headers,
            queryParams: _queryParams
        } = this._applyOverrides({ host, headers, queryParams });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers)
            .query(_queryParams)
            .send(body);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }

    async delete({ host = null, restPath = null, headers = null, queryParams = null, body = null, ...passthrough }) { // eslint-disable-line unused-params
        if (!this.host && !host) {
            throw new Error("Doggo DELETE error: No host!");
        }

        // body is deconstructed but unused: filter them out of the passthrough

        const { 
            host: _host,
            headers: _headers,
            queryParams: _queryParams
        } = this._applyOverrides({ host, headers, queryParams });
        const requestUrl = restPath ? `${_host}/${restPath}` : _host;

        const request = this._request
            .options(requestUrl)
            .set(_headers)
            .query(_queryParams);

        try {
            const response = await request;
            return Object.assign({}, passthrough, { response });
        } catch (error) {
            if (this._settle) {
                return Object.assign({}, passthrough, { error });
            } else {
                throw error;
            }
        }
    }
}

module.exports = Doggo;
