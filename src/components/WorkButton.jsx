import React from 'react'
import {Link, Button} from "@heroui/react";
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
const WorkButton = ({children,className,link}) => {
  return (
     <Button
      showAnchorIcon
      as={Link}
      className={twMerge(clsx(`bg-blue-600`,className))}
      href={link}
      variant="solid"
    >
     {children}
    </Button>
  )
}

export default WorkButton