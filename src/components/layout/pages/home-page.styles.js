import styled from "styled-components";

export const HomePageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  min-height: 2000px;
  /* width: 100vw; */
  .backBlobBottom {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 15vh;
    bottom: -20px;
    transform: scaleY(-1);
  }
  .bubbleBlobs {
    z-index: -2;
    position: absolute;
    width: 40%;
    height: 60vh;
    bottom: -70px;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  top: -85px;
  #section-column-right {
    padding: 0px 1rem 0px 1rem;
  }
  .backBlobTop {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: auto;
  }
  #section-column-left {
    margin-top: 20px;
  }
  #section-column-right {
    margin-top: 20px;
  }
`;

// export const Title = styled.div`
//   margin: 30px 0 50px 0;
//   font-size: xx-large;
//   color: white;
// `;
export const AboutMeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-bottom: 30px;
  .aboutMeText {
    text-align: center;
    padding: 10px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 60%;
    color: white;
  }
`;
