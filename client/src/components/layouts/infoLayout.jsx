import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InfoSidebar from '../pages/sidebar/infoSidebar'
import Layout from './common/layout'
import Note from '../pages/main/common/note'
import { useTranslation } from 'react-i18next'
import { loadInfoNote, updateInfoNote, getInfoNote, getInfoNotesLoadingStatus } from '../../store/infoSlice'
import Spinner from '../common/spinner'


const InfoLayout = () => {
  const {i18n} = useTranslation()
  const dispatch = useDispatch()
  const infoNote = useSelector(getInfoNote())
  const infoNoteIsLoading = useSelector(getInfoNotesLoadingStatus())

  useEffect(() => {
    dispatch(loadInfoNote(i18n.language))
  }, [i18n.language])

  const handleUpdateInfo = (infoNote) => {
    dispatch(updateInfoNote(infoNote))
  }

  return (
    <Layout>
      <InfoSidebar/>

      {infoNoteIsLoading
        ? <Spinner/>

        : <Note note={infoNote} onUpdate={handleUpdateInfo}
                type="INFO"/>
      }
    </Layout>
  )
}

export default InfoLayout
