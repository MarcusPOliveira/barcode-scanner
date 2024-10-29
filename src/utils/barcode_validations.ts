/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
// referência: https://github.com/brunolouvem/boleto-barcode-parser
export const bankSlip = (function () {
  'use strict'

  const block = function (string: string | any[], start: number, end: number) {
    return string.slice(start, end)
  }

  const general_dv = function (bankslip: any) {
    return block(bankslip, 4, 5)
  }

  const currency_info = function (bankslip: any) {
    return block(bankslip, 3, 4)
  }

  const bank_info = function (bankslip: any) {
    return block(bankslip, 0, 3)
  }

  const duedate_factor = function (bankslip: any) {
    return block(bankslip, 5, 9)
  }

  const amount = function (bankslip: any) {
    return block(bankslip, 9, 19)
  }

  const bankslip_segment_1 = function (bankslip: any) {
    return append_dv_block([
      bank_info(bankslip),
      currency_info(bankslip),
      block(bankslip, 19, 24),
    ])
  }

  const bankslip_segment_2 = function (bankslip: any) {
    return append_dv_block([block(bankslip, 24, 34)])
  }

  const bankslip_segment_3 = function (bankslip: any) {
    return append_dv_block([block(bankslip, 34, 44)])
  }

  const bankslip_segment_4 = function (bankslip: any) {
    return [duedate_factor(bankslip), amount(bankslip)].join('')
  }

  var append_dv_block = function (array_data: any[]) {
    const str = array_data.join('')
    // @ts-ignore
    return str.concat(get_sum_from_sequence(str))
  }

  function multiply_sequence(len: number) {
    const bars = []
    let start_dig = 2

    for (let i = 0; i < len; i++) {
      bars.push(start_dig)
      if (start_dig === 1) {
        start_dig++
      } else {
        start_dig--
      }
    }
    return bars
  }

  function get_sum_from_sequence(seq: string | any[]) {
    let bar: (string | number)[] = []
    const mseq = multiply_sequence(seq.length).reverse()

    mseq.forEach(function (value, index) {
      bar.push(value * parseInt(seq[index]))
    })

    const string_bar = bar.join('')
    let bar_value = 0
    bar = Array.from(string_bar)

    const sum = bar.forEach(function (value) {
      // @ts-ignore
      bar_value += parseInt(value)
    })

    return 10 - (bar_value % 10)
  }

  const bankslip = function (bankslip_number: any) {
    return [
      bankslip_segment_1(bankslip_number),
      bankslip_segment_2(bankslip_number),
      bankslip_segment_3(bankslip_number),
      general_dv(bankslip_number),
      bankslip_segment_4(bankslip_number),
    ].join('')
  }

  return {
    parse: bankslip,
  }
})()
