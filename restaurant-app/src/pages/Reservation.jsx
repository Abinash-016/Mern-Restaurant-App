import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        requests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Submitted:', formData);
        alert('Reservation request submitted! We will contact you shortly to confirm.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: 2,
            requests: ''
        });
    };

    return (
        <div className="reservation-page">
            <Navbar />
            <div className="reservation-container">
                <div className="reservation-image">
                    <div className="overlay"></div>
                    <div className="content">
                        <h2>Reserve Your Table</h2>
                        <p>Experience the finest dining with an ambiance that speaks to your soul.</p>
                    </div>
                </div>
                <div className="reservation-form-container">
                    <div className="form-wrapper">
                        <h3>Book a Table</h3>
                        <form onSubmit={handleSubmit} className="reservation-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time</label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="guests">Number of Guests</label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    min="1"
                                    max="20"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="requests">Special Requests</label>
                                <textarea
                                    id="requests"
                                    name="requests"
                                    value={formData.requests}
                                    onChange={handleChange}
                                    rows="3"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-block">Confirm Reservation</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Reservation;
