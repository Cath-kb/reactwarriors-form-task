import React from "react"

import DefaultAvatar from "./../../images/default-avatar.png"
import FileField from "./../fields/FileField"

const Avatar = ({ values: { avatar }, errors, onChange }) => {
  const onAvatarChange = event => {
    const { name, files } = event.target
    if (!files[0].type.includes('image')) return
    const reader = new FileReader()
    reader.onload = event => {
      onChange({
        target: {
          name,
          value: event.target.result
        }
      })
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <React.Fragment>
      <div className="mb-4">
        <img src={avatar || DefaultAvatar} className="w-100" alt="User Avatar" />
      </div>
      <FileField
        label="Choose Avatar"
        id="avatar"
        name="avatar"
        onChange={onAvatarChange}
        error={errors.avatar}
      />
    </React.Fragment>
  )
}

export default Avatar
