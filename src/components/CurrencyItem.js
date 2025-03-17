import React from 'react'
import Select from 'react-select'

export default function CurrencyItem(props) {
const{optionsList, selectedCurrency, onChangeCurrency, onChangeAmount, amount} = props
return (
    <div className="input-select-container">
        <input
          type="number"
          placeholder="0"
          className="input"
          value={amount % 1 === 0 ? amount : Number(amount).toFixed(6)}
          onChange={onChangeAmount}
        />
        <Select
          options={optionsList}
          value={selectedCurrency}
          onChange={onChangeCurrency}
          className="select"
          isSearchable
        />
    </div>
  )
}
