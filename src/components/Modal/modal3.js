import React from 'react';
import '../Modal/styles2.css';

const Modal3 = (props) => {
    // 중앙에 뜨는 모달창 입니다.
    // 버튼 2개가 존재하며 props 수정을 통해 커스텀 가능합니다.
    // 모달 제목(header) 사용을 원치않을경우 제거후 사용하시면 됩니다.
    /* 사용방법은 아래와 같습니다.
    const [ModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    <Modal3 open={ModalOpen} close={closeModal} header="Modal heading"
            button1={closeModal} button2={closeModal} button1Content="취소" button2Content="확인">
                팝업창 테스트
            </Modal1>
    */

    // 열기이벤트, 닫기이벤트, 헤더내용, 버튼1이벤트, 버튼2이벤트, 버튼1내용, 버튼2내용 props
    const { open, close, header, button1, button2, button1Content, button2Content } = props;
  
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button id="button1" className="button1" onClick={button1}>
                {button1Content}
              </button>
              <button className="button2" onClick={button2}>
                {button2Content}
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    );
  };

export default Modal3;