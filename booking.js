document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevents the default form submission


  
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      service: document.getElementById('service').value,
      date: document.getElementById('date').value
  };

  try {
      const response = await fetch('http://localhost:3002/api/products', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
          alert("Booking successful!");
      } else {
          alert("Error: " + result.message);
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
  }
});