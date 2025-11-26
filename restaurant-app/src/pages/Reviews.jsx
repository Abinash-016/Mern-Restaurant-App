import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Eleanor Fitzgerald",
      rating: 5,
      date: "2 days ago",
      comment: "An absolute masterpiece of culinary art. The ambiance was breathtaking and the service was impeccable. Highly recommended for special occasions.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "James Sterling",
      rating: 5,
      date: "1 week ago",
      comment: "The tasting menu was a journey of flavors. Each dish was better than the last. The wine pairing was spot on.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      rating: 4,
      date: "2 weeks ago",
      comment: "Beautiful location and stunning decor. The food was delicious, though the wait time was a bit longer than expected. Still a wonderful evening.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      ...newReview,
      date: "Just now",
      avatar: "https://ui-avatars.com/api/?name=" + newReview.name + "&background=random"
    };
    setReviews([review, ...reviews]);
    setShowForm(false);
    setNewReview({ name: '', rating: 5, comment: '' });
    showToast('Review submitted successfully!', 'success');
  };

  return (
    <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Guest Reviews</h1>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" size={24} />
            ))}
          </div>
          <p style={{ color: 'var(--color-text-muted)' }}>4.9 Average Rating based on 500+ reviews</p>
        </div>

        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <button onClick={() => setShowForm(!showForm)} className="btn">
            {showForm ? 'Cancel Review' : 'Write a Review'}
          </button>
        </div>

        {showForm && (
          <div style={{ maxWidth: '600px', margin: '0 auto 4rem', backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-primary)' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Rating</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      style={{ background: 'none', color: star <= newReview.rating ? 'var(--color-primary)' : 'gray', cursor: 'pointer' }}
                    >
                      <Star fill={star <= newReview.rating ? "currentColor" : "none"} size={24} />
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Comment</label>
                <textarea
                  required
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  rows="4"
                  style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }}
                ></textarea>
              </div>
              <button type="submit" className="btn" style={{ width: '100%' }}>Submit Review</button>
            </form>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {reviews.map((review) => (
            <div key={review.id} style={{
              backgroundColor: 'var(--color-surface)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <img src={review.avatar} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ color: 'var(--color-text)', marginBottom: '0.2rem' }}>{review.name}</h4>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{review.date}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
