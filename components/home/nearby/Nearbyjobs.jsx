
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'

import { COLORS } from '../../../constants'
import NearByJobCard from '../../common/cards/nearby/NearbyJobCard'
import styles from './nearbyjobs.style'
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'
const Nearbyjobs = () => {
  const router=useRouter();

const{data,loading,reFetch,error}=useFetch('search',{
  query:'React Developer',
  num_pages:1,

})


  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <Text style={styles.headerTitle}>Nearby jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show All</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ):error?(
          <Text>Something went wrong</Text>
        ):(
          data?.map((job)=>(
            <NearByJobCard
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={()=>router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}


      </View>
    </View>
  )
}

export default Nearbyjobs