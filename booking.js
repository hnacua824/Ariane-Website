document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevents the default form submission


//   const serviceValue = document.getElementById('service').value;
// console.log("Service selected:", serviceValue);

const services = Array.from(document.querySelectorAll('input[name="services"]:checked'))
                      .map(checkbox => checkbox.value);
  
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      services: services,
      date: document.getElementById('date').value
  };

  try {
      const response = await fetch('http://localhost:3002/api/users', {
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