import React, { useRef, useEffect } from 'react'

const Index = (props) => {
    const modalRef = useRef(null)

    useEffect(() => {
        setShow()
    }, [props.show])

    const handleOutOfModal = (event) => {
        if (!modalRef.current.contains(event.target)) {
            document.querySelector('.modal').style.display = 'none'
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutOfModal, true);
        return () => {
            document.removeEventListener('click', handleOutOfModal, true);
        };
    });

    const setShow = () => {
        if (props.show === true) {
            document.querySelector('.modal').style.display = 'block'
        } else {
            document.querySelector('.modal').style.display = 'none'
        }
    }

    return (
        <div className="modal">
            <div  ref={modalRef} className="modal-content">
                {props.children}
            </div>
        </div>
    )
}

export default Index