import { api } from '@/lib/axios'
import { Stars } from './styles'
import { useEffect, useState } from 'react'
import { Star } from 'phosphor-react'

type Props = {
  idBook: string | undefined
}

export default function StarsComponent({ idBook }: Props) {
  const [ratingsBook, setRatingsBook] = useState<any>([])
  const [assessment, setAssessment] = useState<number>(0)
  const [rates, setRates] = useState<number[]>([])
  console.log(assessment)

  useEffect(() => {
    let sum: number = 0
    for (let i = 0; rates.length > i; i++) {
      sum = sum + rates[i]
    }
    sum = sum / rates.length
    setAssessment(Math.round(sum))
  }, [rates])

  useEffect(() => {
    const rates: number[] = []
    for (let i = 0; ratingsBook.length > i; i++) {
      rates.push(ratingsBook[i].rate)
    }
    setRates(rates)
  }, [ratingsBook])

  useEffect(() => {
    async function handleFindRatingsUser() {
      const ratingsBook = await api.get('/users/getBook', {
        params: { idBook },
      })
      setRatingsBook(ratingsBook.data.responseBook.ratings)
    }
    handleFindRatingsUser()
  }, [idBook])

  return (
    <>
      {isNaN(assessment) && (
        <Stars>
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 0 && (
        <Stars>
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 1 && (
        <Stars>
          <Star size={16} color="#8381D9" weight="fill" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 2 && (
        <Stars>
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 3 && (
        <Stars>
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 4 && (
        <Stars>
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star size={16} color="#8381D9" />
        </Stars>
      )}
      {assessment === 5 && (
        <Stars>
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
          <Star weight="fill" size={16} color="#8381D9" />
        </Stars>
      )}
    </>
  )
}
