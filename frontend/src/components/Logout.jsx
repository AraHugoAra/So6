import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import logout from "./../assets/icons/logout.png";
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -60%)'
    },
  };

Modal.setAppElement('#root')

export default function Logout() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    function openModal() {
        setIsOpen(true);
      }

    function closeModal() {
    setIsOpen(false);
    }

    async function postFetch() {
        await fetch(`${import.meta.env.VITE_BASE_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
        })
        navigate('/login')
    }

    function handleClick(e) {
        e.preventDefault()
        postFetch()
        closeModal()
    }

    return(
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Logout confirm modal"
            >
            <p className='modal__description--logout'>Etes-vous sûr.e de vouloir infirmer votre envie de ne pas désirer le fait d'arrêter de ne pas être déconnecté.e ?</p>
            <form>
                <button onClick={(e) => handleClick(e)}>Non je ne souhaite pas ne pas infirmer.</button>
                <button onClick={closeModal}>Oui je confirme mon refus de non validation.</button>
            </form>
            </Modal>
            <img className='navbar__logo' src={logout} onClick={openModal} />
        </>
    )
}