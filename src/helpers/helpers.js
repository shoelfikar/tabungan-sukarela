module.exports = {
    response: (res, result, status, message,err)=>{
      let resultPrint = {}
      if(status !== 200){
        resultPrint.status = 'Failed';
        resultPrint.status_code = status;
        resultPrint.result = result;
        resultPrint.message = message;
        resultPrint.err = err||null;
        return res.status(resultPrint.status_code).json(resultPrint);
      }
      resultPrint.status = 'Success';
      resultPrint.status_code = status;
      resultPrint.result = result;
      resultPrint.message = message;
      resultPrint.err = err||null;
      return res.status(resultPrint.status_code).json(resultPrint);
    }
  }