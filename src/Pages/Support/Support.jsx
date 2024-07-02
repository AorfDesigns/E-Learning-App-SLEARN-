import React from 'react';
import FAQ from '../../Components/FAQ\'S/FAQ\'S';
import ContactSupport from '../../Components/Contact Support/ContactSupport';
import UserGuide from '../../Components/UserGuide/UserGuide';

const Support = () => {
  return (
    <>
      <div>
        <FAQ />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 mt-6">
        <div className="flex-1">
          <ContactSupport />
        </div>
        <div className="flex-1">
          <UserGuide />
        </div>
      </div>
    </>
  );
};

export default Support;
