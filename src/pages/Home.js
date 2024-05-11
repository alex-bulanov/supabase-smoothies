import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react';
import SmoothieCard from '../components/SmoothieCard';

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { error, data } = await supabase.from('smoothies').select();

      if (error) {
        setFetchError('Could not fetch the smoothies');
        setSmoothies(null);
        console.log('error', error);
      }

      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, []);

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter((sm) => sm.id !== id);
    });
  };

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className="smoothies">
          {/* oreder-by buttons*/}
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
