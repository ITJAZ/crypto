import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AlertSwal = withReactContent(Swal);

const showDialog = (icon, title, content, footer, className) => {
  AlertSwal.fire({
    icon: icon,
    title: title,
    text: content,
    customClass: className,
    showConfirmButton: false,
    showCloseButton: true,
    footer: footer,
    //allowOutsideClick: () => AlertSwal.close(),
  });
};

export default showDialog;

