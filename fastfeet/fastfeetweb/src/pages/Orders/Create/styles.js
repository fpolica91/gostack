import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  background: #fff;
  border-radius: 4px;

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    /* display: flex;
    /* flex-direction: column; */
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1) !important;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000000
      /* color: #fff; */
      margin: 0 0 10px;
      &::placeholder: {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`
