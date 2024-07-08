import React from 'react';

const Form = () => {
  return (
    <form>
      <center>
        <table style={{ borderCollapse: 'collapse', width: '50%' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="name">Name:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="text" id="name" name="name" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="age">Age:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="number" id="age" name="age" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="email">Email:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="email" id="email" name="email" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="phone">Phone Number:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="tel" id="phone" name="phone" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="dob">Date of Birth:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="date" id="dob" name="dob" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="gender">Gender:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <select id="gender" name="gender" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="address">Address:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea id="address" name="address" required></textarea>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="password">Password:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="password" id="password" name="password" required />
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="profile">Profile Picture:</label>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <input type="file" id="profile" name="profile" accept="image/*" required />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px' }}>
                <label htmlFor="terms">
                  <input type="checkbox" id="terms" name="terms" required />
                  I agree to the terms and conditions
                </label>
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </form>
  );
};

export default Form;