import React from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom';

const filter = [
    { type: 'Category', value: ['Shirts'] },
    { type: 'Gender', value: ['Men'] },
    { type: 'Colour', value: ['Black', 'Blue', 'Brown', 'White', 'Grey', 'Khaki', 'Silver', 'Pink', 'Multicolor', 'Red'] },
    { type: 'Price', value: ['Under ₹ 199', 'Under ₹ 249', 'Under ₹ 299', 'Under ₹ 349', 'Under ₹ 399', 'Under ₹ 449', 'Under ₹ 499'] },
    { type: 'Rating', value: ['2.0 and above', '3.0 and above', '3.5 and above', '4.0 and above'] },
    { type: 'Size', value: ['SM', 'M', 'L', 'XL'] },
]

const ProductList = () => {

    const { product } = useParams();
    const image = 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/w/e/u/m-fk1902-combraided-original-imagm83uxexgw3hz.jpeg?q=70'

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="py-3">
                <h4 className="text-center my-4"><strong>{product}</strong></h4>

                <div className="container my-5">
                    <div className="row align-items-start">
                        <div className="col-lg-3 rounded border border-secondary">
                            <h4 className='mt-2 text-center mb-0'>Filters</h4>
                            <hr />
                            <div className='my-3'>
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    {filter.map((item, index) => (
                                        <div className="accordion-item" key={index}>
                                            <h2 className="accordion-header" id={`heading-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`} aria-expanded="false" aria-controls={`#collapse-${index}`} style={{ backgroundColor: "#eee" }}>
                                                    {item.type}
                                                </button>
                                            </h2>

                                            <div id={`collapse-${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading-${index}`}>
                                                <div className="accordion-body" style={{ backgroundColor: "#eee" }}>
                                                    {
                                                        item.value.map((val) => (
                                                            <div className="form-check d-inline-block me-3">
                                                                <input className="form-check-input border border-dark" type="checkbox" value="" id="flexCheckDefault" />
                                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                    {val}
                                                                </label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mt-5 mt-lg-0">
                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 mb-5">
                                        <Card image={image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList
