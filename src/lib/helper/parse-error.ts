export const parseError = (error: any): string => {
  try {
    const response = error?.response;
    const responseData = response?.data;

    console.log(responseData, 'response');

    if (responseData) {
      if (Array.isArray(responseData) && responseData.length > 0) {
        return responseData[0]?.errors?.issues?.[0]?.message ?? 'Something went wrong.';
      }

      if (responseData.detail) {
        if (typeof responseData.detail === 'string') {
          return responseData.detail;
        }
        if (typeof responseData.detail === 'object') {
          const firstKey = Object.keys(responseData.detail)[0];
          const messages = responseData.detail[firstKey];
          if (Array.isArray(messages) && messages.length > 0) {
            return messages[0];
          }
        }
      }

      if (typeof responseData === 'object') {
        const firstKey = Object.keys(responseData)[0];
        const messages = responseData[firstKey];
        if (Array.isArray(messages) && messages.length > 0) {
          return messages[0];
        }
      }

      return 'Something went wrong.';
    }

    return error?.message ?? 'Something went wrong. Try again later.';
  } catch (parseErrorException) {
    // If anything goes wrong while parsing the error, return a safe fallback
    console.error('Error while parsing error:', parseErrorException);
    return 'Something went wrong. Please try again later.';
  }
};
