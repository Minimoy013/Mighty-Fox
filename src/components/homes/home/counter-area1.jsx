import React from 'react';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        count: 2016,
        text: '',
        title: 'Année de création',
        decimal: 0
    },
    {
        color: 'secondary-color',
        count: 97,
        text: '%',
        title: 'Taux de statisfaction',
        decimal: 0
    },
    {
        color: 'extra02-color',
        count: 147,
        text: '',
        title: 'Projets Réalisés'
    },
    {
        color: 'extra05-color',
        count: 55,
        text: '%',
        title: 'de Croissance chez nos Clients',
        border_none:'border-none'
    }
]

const CounterArea = () => {
    return (
        <div className="counterup-area-3 gap-bottom-equal">
            <div className="container">
                <div className="row g-5">
                    {counter_data.map((c, i) => (
                        <div key={i} className="col-lg-3 col-sm-6">
                            <div className={`edu-counterup counterup-style-3 ${c.border_none ? c.border_none : '' }`}>
                                <h2 className={`counter-item count-number ${c.color}`}>
                                    <span className="odometer"><Counter number={parseFloat(c.count)} text={c.text} decimal={c.decimal} /></span>
                                </h2>
                                <h6 className="title">{c.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CounterArea;