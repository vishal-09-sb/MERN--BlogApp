//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, Please Wait..'
    },
    success: {
        title: 'success',
        message: 'Data sucessfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An Error Occurred while Fetching from the Server, Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An Error Occurred while parsing the request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server, please check internet connectivity and try again'
    }
}

//API SERVICE CALL

export const SERVICE_URLS = {
    userSignup: {
        url: '/signup',
        method: 'POST'
    }
}