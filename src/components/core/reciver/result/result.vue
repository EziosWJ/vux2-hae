<template>
    <div>
        <group>
            <cell title="姓名" :value="name"></cell>
            <cell title="帮教结果" value="良好"></cell>
            <cell-form-preview :list="list">

            </cell-form-preview>
        </group>
        
    </div>
</template>
<script>
    import {CellFormPreview,Group,Cell} from 'vux'
    export default{
        components:{
            CellFormPreview,
            Group,
            Cell
        },
        data(){
             return {
                list: [{
                    label: '劳动教育',
                    value: '性格开朗，工作认真负责，细心，有很强的职责心和进取心,头脑灵活，不怕吃苦，理解潜力强，能够很好的处理同事的关系。'
                }, {
                    label: '谈话教育',
                    value: '忠实诚信,讲原则，说到做到，决不推卸职责;有自制力，做事情始终坚持有始有终，从不半途而废;肯学习,有问题不逃避。'
                }, {
                    label: '违规违纪',
                    value: '不迟到早退，严于律己。'
                },{
                    label:'社区服务',
                    value:'本人性格开朗，为人细心，做事一丝不苟，能吃苦耐劳，工作脚踏实地，有较强的职责心，具有团队合作精神。'
                }],
                name:this.$store.state.USER_NAME
            }
        }
    }
    
</script>