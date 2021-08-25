import React from 'react'

const moneyStyle = {
    backgroundColor: "#1d2369",
    border: "solid #f6e4a4",
    borderRadius: "100px / 50px",
    color: "#f6e4a4",
    height:"50px",
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto"
}

const MoneyBranch = ({value}) => {
    return (
        <div className="money-branch" style={moneyStyle}>
            <span>{value}</span>
        </div>
    )
}

export default MoneyBranch
