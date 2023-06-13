/**
 * Sweet Alert 2
 * -----------------------------------------------------------------------
 *          npm install sweetalert2
 * 
 * Sweet Alert 2 Usage: (ES6 Modules or TypeScript)
 * -----------------------------------------------------------------------
 *          import Swal from 'sweetalert2'
 * 
 * Modal 1: A confirm dialog, with a function attached to the "Confirm"-button
 
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
        }
    })
 * 
 */