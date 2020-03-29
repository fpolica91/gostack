import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 0 50px;
  display: flex;
  max-width: 900px;
  flex-direction: column;
`
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;

    margin: 30px 0;

    h2 {
      color: #000000;
    }
    input {
      margin-top: 20px;
      background: #ffffff;
      width: 170px;
      &::placeholder {
        text-align: center;
      }
    }
  }

  button {
    margin-top: 30px;
    background: #7d40e7;
    height: 36px;
    width: 142px;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 12px;
  thead th {
    color: #444444;
    text-align: left;
    padding: 12px;
  }
  tbody {
    padding: 12px;

    tr {
      background: #fff;

      td {
        color: #666666;
        padding: 12px;

        button {
          border: 0;
        }
        svg {
          margin-left: 12px;
        }
      }
    }
  }
`
export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`
