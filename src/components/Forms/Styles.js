import styled, {css} from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 15px 15px;
  font-size: 16px;
  color: white;

  &:visited {
    color: white;
  }

  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};

  &:hover {
    background-image: linear-gradient(${light}, ${dark});

    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }

  &:visited {
    color: black;
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  @media (min-width: 1440px) {
    form {
      background-color: white;
      max-width: 500px;
      margin: 25px 0 0 850px;
      border: 1px solid #ccc;
      padding: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      position: relative;

      & > div {
        display: flex;
        flex-flow: row nowrap;
        line-height: 2em;
        margin: 5px;

        & > label {
          color: #333;
          width: 110px;
          font-size: 1em;
          line-height: 32px;
        }

        & > input,
        & > select,
        & > textarea {
          flex: 1;
          padding: 15px 15px;
          font-size: 1em;
          margin-left: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        & > input[type='checkbox'] {
          margin-top: 7px;
        }

        & > div {
          margin-left: 16px;

          & > label {
            display: block;

            & > input {
              margin-right: 3px;
            }
          }
        }

        & > span {
          line-height: 32px;
          margin-left: 10px;
          color: #800;
          font-weight: bold;
        }
      }

      & > .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 15px;
      }

      button {
        width: 433px;
        margin-left: 15px;

        &[type='submit'] {
          ${btnPrimary};
        }

        &[type='button'] {
          ${btnDefault};
        }
      }

      .error {
        display: flex;
        font-weight: bold;
        color: #800;
        flex-flow: row nowrap;
        justify-content: center;
      }

      pre {
        border: 1px solid #ccc;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
        padding: 20px;
      }
    }
  }
  
  
  

  @media (max-width: 1440px) {

    form {
      background-color: white;
      max-width: 500px;
      margin: 25px 10px 0 10px;
      border: 1px solid #ccc;
      padding: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      position: relative;

      & > div {
        display: flex;
        flex-flow: row nowrap;
        line-height: 2em;
        margin: 5px;

        & > label {
          color: #333;
          width: 110px;
          font-size: 1em;
          line-height: 32px;
        }

        & > input,
        & > select,
        & > textarea {
          flex: 1;
          padding: 15px 15px;
          font-size: 1em;
          margin-left: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        & > input[type='checkbox'] {
          margin-top: 7px;
        }

        & > div {
          margin-left: 16px;

          & > label {
            display: block;

            & > input {
              margin-right: 3px;
            }
          }
        }

        & > span {
          line-height: 32px;
          margin-left: 10px;
          color: #800;
          font-weight: bold;
        }
      }

      & > .buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 15px;
      }

      button {
        width: 333px;
        margin-left: 15px;

        &[type='submit'] {
          ${btnPrimary};
        }

        &[type='button'] {
          ${btnDefault};
        }
      }

      .error {
        display: flex;
        font-weight: bold;
        color: #800;
        flex-flow: row nowrap;
        justify-content: center;
      }

      pre {
        border: 1px solid #ccc;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
        padding: 20px;
      }
    }
  }
}

`