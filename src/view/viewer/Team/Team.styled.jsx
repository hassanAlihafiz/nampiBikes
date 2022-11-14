import styled from "styled-components";
const Wrapper = styled.div`
  padding: 30px 80px 40px 80px;
  .heading {
    text-align: center;
    line-height: 1.35em;
    font-size: 40px;
  }
  .card {
    height: 400px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .underText {
    background-color: rgb(244, 244, 244);
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .name {
      font-size: 30px;
      font-weight: bold;
      color: rgb(0, 0, 0);
    }
    .post {
      font-size: 22px;
    }
  }
  .row {
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 20px;
  }
  .image {
    height: 200px;
  }
`;
export default Wrapper;
