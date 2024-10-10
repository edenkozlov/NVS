import React, { useEffect } from 'react';
import CapsuleSol1 from '../CapsuleSol2/Index';
import CapsuleSol2 from '../CapsuleSol1/Index';
import Real from '../Real/Index';

function Advisory() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <CapsuleSol1 />
      <CapsuleSol2 />
      <Real />
    </div>
  );
}

export default Advisory;
