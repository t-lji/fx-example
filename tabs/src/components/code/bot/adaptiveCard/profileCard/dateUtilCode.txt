class DateUtil {
  // formate time to UTC
  static formatUTCTime = date => {
    // add lead zero
    const formatNumber = n => {
      const r = n.toString()
      return r[1] ? r : '0' + r
    }
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + 'T' + [hour, minute, second].map(formatNumber).join(':') + 'Z'
  }
}

module.exports.DateUtil = DateUtil;
