import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@heroui/react'
import React, { useState } from 'react'
import WorkButton from '../../assets/svg/WorkButton'


const WorkModel = () => {
    const {isOpen,onOpen,onOpenChange}=useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
      const [size, setSize] = React.useState("5xl");

  return (
    <div>
     <Button onPress={onOpen}><WorkButton/></Button>
     <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size={size}  scrollBehavior={scrollBehavior}>
        <ModalContent>
            {(onClose)=>(
                <div>
                    <ModalHeader className='text-black'>this is project</ModalHeader>
                    <ModalBody className='text-black'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fuga.</p>
                        <p>Technology used</p>
                        <p>library use</p>
                    </ModalBody>
                </div>
              
            )}
        </ModalContent>
     </Modal>
    </div>
  )
}

export default WorkModel